<h1 align="center" style="color:red">需求迭代内容 - <%= projectName %> </h1>

## 👤 相关人员
<% if (productManager) { -%>
* 产品：<%= productManager %>
<% } -%>
<% if (designer) { -%>
* 设计师：<%= designer %>
<% } -%>
<% if (frontendEngineer) { -%>
* 前端：<%= frontendEngineer %>
<% } -%>
<% if (backendEngineer) { -%>
* 后端：<%= backendEngineer %>
<% } -%>
<% if (tester) { -%>
* 测试：<%= tester %>
<% } -%>
<% if (thirdPartyTeam) { -%>
* 上下游关联：<%= thirdPartyTeam %>
<% } -%>


## 📃 相关文档地址

<% if (prd) { -%>
* 需求文档
    - [<%= projectName %>](<%= prd %>)
<% } -%>

## ⭐️ 主流程目录

<% if (prdSplit) { -%>
* 需求拆分：<%= prdSplit %>
<% } -%>
<% if (nonfunctionalRequirements) { -%>
* 非功能需求(埋点，渠道码等)：<%= nonfunctionalRequirements %>
<% } -%>
<% if (resourceNeeds) { -%>
* 资源需求：<%= resourceNeeds %>
<% } -%>


## ⭐️ 测试方案

<% if (influence) { -%>
* 影响范围：<%= influence %>
<% } -%>

<% if (notice) { -%>
* 注意事项：一些特别需要注意的情况或逻辑的说明：<%= notice %>
<% } -%>