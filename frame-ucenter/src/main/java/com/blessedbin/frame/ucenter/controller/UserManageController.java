package com.blessedbin.frame.ucenter.controller;

import com.blessedbin.frame.common.Pagination;
import com.blessedbin.frame.common.SimpleResponse;
import com.blessedbin.frame.common.exception.ParamCheckRuntimeException;
import com.blessedbin.frame.common.utils.UUIDUtils;
import com.blessedbin.frame.common.validate.PostMethodValidationGroup;
import com.blessedbin.frame.ucenter.component.FrameApi;
import com.blessedbin.frame.ucenter.entity.dto.UserDto;
import com.blessedbin.frame.ucenter.modal.SysUser;
import com.blessedbin.frame.ucenter.service.DepartmentService;
import com.blessedbin.frame.ucenter.service.UserManageService;
import io.swagger.annotations.Api;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by xubin on 2018/7/9.
 *
 * @author 37075
 * @date 2018/7/9
 * @time 13:36
 * @tool intellij idea
 */
@RestController
@RequestMapping(value = "${frame.base-path.ucenter}/sys/user")
@Log4j2
@Api(description = "用户管理")
public class UserManageController {

    private static String DEFAULT_PASSWORD = "123456";

    @Autowired
    private UserManageService userManageService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/datatable.json")
    @FrameApi
    public SimpleResponse<Pagination<SysUser>> getTable(@RequestParam(name = "page_num", required = false, defaultValue = "1") Integer pageNum,
                                                        @RequestParam(name = "page_size", required = false, defaultValue = "20") Integer pageSize,
                                                        @RequestParam(name = "search_value", required = false, defaultValue = "") String searchValue) {
        Pagination<SysUser> dataTable = userManageService.getDataTable(pageNum, pageSize);
        return SimpleResponse.ok(dataTable);
    }

    @GetMapping
    @FrameApi
    public SimpleResponse<SysUser> getOne(@RequestParam String uuid){
        return SimpleResponse.ok(userManageService.selectByPk(uuid));
    }

    @DeleteMapping
    @FrameApi
    public SimpleResponse delete(@RequestParam String id){
        userManageService.deleteByPk(id);
        return SimpleResponse.deleted();
    }

    /**
     * 管理员添加用户
     * @param param
     * @return
     */
    @PostMapping
    @FrameApi
    public SimpleResponse addOne(@RequestBody @Validated(PostMethodValidationGroup.class)
                                         UserDto param){
        if(userManageService.checkEmailExists(param.getEmail()) ||
                userManageService.checkUsernameExists(param.getUsername()) ||
                userManageService.checkPhoneExists(param.getPhone())){
            throw new ParamCheckRuntimeException("用户名或邮箱或电话重复");
        }



        SysUser user = new SysUser();
        user.setUuid(UUIDUtils.generateUUID());
        user.setUsername(param.getUsername());
        user.setPassword(passwordEncoder.encode(DEFAULT_PASSWORD));
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());


        // 添加Email
        if(!StringUtils.isEmpty(param.getEmail())){
            user.setEmail(param.getEmail());
        }
        // 添加Phone
        if(!StringUtils.isEmpty(param.getPhone())){
            user.setPhone(param.getPhone());
        }
        int add = userManageService.insertSelective(user);
        log.debug("添加用户{}成功，result:{}",user.getUsername(),add);
        return SimpleResponse.ok();
    }
}


