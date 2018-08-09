package com.blessedbin.frame.ucenter.controller;

import com.blessedbin.frame.common.SimpleResponse;
import com.blessedbin.frame.common.exception.ParamCheckRuntimeException;
import com.blessedbin.frame.common.ui.CascaderNode;
import com.blessedbin.frame.common.validate.PostMethodValidationGroup;
import com.blessedbin.frame.ucenter.component.FrameApi;
import com.blessedbin.frame.ucenter.entity.dto.DepartmentDto;
import com.blessedbin.frame.ucenter.modal.SysDepartment;
import com.blessedbin.frame.ucenter.modal.SysDepartmentExample;
import com.blessedbin.frame.ucenter.service.DepartmentService;
import io.swagger.annotations.Api;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Created by xubin on 2018/7/9.
 * 部门管理
 * @author 37075
 * @date 2018/7/9
 * @time 17:04
 * @tool intellij idea
 */
@RestController
@RequestMapping(value = "${frame.base-path.ucenter}/department")
@Api(description = "部门管理")
@Log4j2
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping("/tree_table.json")
    @FrameApi
    public SimpleResponse<List<DepartmentDto>> treeTables(){
        return SimpleResponse.ok(departmentService.getDepartmentTree());
    }

    @GetMapping("/cascader.json")
    @FrameApi
    public SimpleResponse<List<CascaderNode>> cascaderList(@RequestParam Integer organizationId){
        List<CascaderNode> cascaders = departmentService.getCascaders(organizationId);
        return SimpleResponse.ok(cascaders);
    }

    /**
     * 添加部门
     * @param department
     * @return
     */
    @PostMapping
    @FrameApi
    public SimpleResponse add(@RequestBody @Validated(PostMethodValidationGroup.class)SysDepartment department) {
        log.debug("request department param:{}",department);

        if(department.getpId() == null || department.getpId() == -1){
            SysDepartmentExample example = new SysDepartmentExample();
            //TODO
            if(departmentService.checkExistsByExample(example)){
                throw new ParamCheckRuntimeException("同级下名称重复");
            }
            department.setpId(null);
        } else {
            SysDepartmentExample example = new SysDepartmentExample();
            //TODO
            if(departmentService.checkExistsByExample(example)){
                throw new ParamCheckRuntimeException("同级下名称重复");
            }
        }

        department.setCreateTime(new Date());
        department.setUpdateTime(new Date());

        departmentService.insert(department);

        return SimpleResponse.created("创建成功",department);
    }

}
