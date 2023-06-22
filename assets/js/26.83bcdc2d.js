(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{351:function(a,s,n){"use strict";n.r(s);var t=n(4),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载虚拟机镜像可选择不同虚拟机平台的系统镜像文件")]),a._v("\nvagrant box "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" generic/ubuntu2004\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定需要下载的虚拟机平台和系统镜像版本")]),a._v("\nvagrant box "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" generic/ubuntu2004 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--provider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("virtualbox --box-version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.1")]),a._v(".22\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看下载到本地的box镜像")]),a._v("\nvagrant box list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看已经创建的box虚拟机配置文件详情")]),a._v("\nvagrant ssh-config\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有box运行状态")]),a._v("\nvagrant status \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h1",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定box镜像初始化,会得到一个 Vagrantfile文件，里面使用的基础box是初始化指定的box镜像名")]),a._v("\nvagrant init box_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h1",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动所有虚拟机")]),a._v("\nvagrant up\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动本地所有环境虚拟机")]),a._v("\nvagrant up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--provision")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定某台虚拟机启动")]),a._v("\nvagrant up vm_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定box虚拟化平台并启动")]),a._v("\nvagrant up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--provider")]),a._v(" virtualbox\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 唤醒虚拟机")]),a._v("\nvagrant resume  vm_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h1",{attrs:{id:"停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[a._v("#")]),a._v(" 停止")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关机所有box")]),a._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定某台box关机")]),a._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" vm_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 挂起虚拟机")]),a._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("suspend")]),a._v(" vm_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h1",{attrs:{id:"加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[a._v("#")]),a._v(" 加载")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新开始")]),a._v("\nvagrant resume vm_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新加载")]),a._v("\nvagrant reload vm_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重载虚拟机")]),a._v("\nvagrant reload "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--provision")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h1",{attrs:{id:"删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[a._v("#")]),a._v(" 删除")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除box镜像")]),a._v("\nvagrant box remove box_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定平台和版本号进行删除本地镜像文件")]),a._v("\nvagrant box remove "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--provider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hyperv --box-version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.1")]),a._v(".22\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 强制删除所有创建的box虚拟机")]),a._v("\nvagrant destroy "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定某台box虚拟机进行删除")]),a._v("\nvagrant destroy vm_name "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清除无效的虚拟机缓存条目")]),a._v("\nvagrant global-status "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--prune")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h1",{attrs:{id:"进入box内部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入box内部"}},[a._v("#")]),a._v(" 进入box内部")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入指定虚拟机内部")]),a._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v("  vm_name\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h1",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[a._v("#")]),a._v(" 网络")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.ityoudao.cn/posts/vagrant-network/",target:"_blank",rel:"noopener noreferrer"}},[a._v("vagrant 网路"),s("OutboundLink")],1)]),a._v(" "),s("h1",{attrs:{id:"打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[a._v("#")]),a._v(" 打包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 插件vagrant-vbguest")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 作用：提高box运行效率")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装指定版本的agrant-vbguest插件")]),a._v("\nvagrant plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vagrant-vbguest --plugin-version "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.21")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把当前做好的box环境打包成box镜像，导出的box名为package.box")]),a._v("\nvagrant package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--bash")]),a._v("   vm_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如何使用打包的package.box镜像")]),a._v("\nvagrant  box "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" box_name "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--provider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("virtualbox ./package.box\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看创建的box_name的基础box")]),a._v("\nvagrant box list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看虚拟机列表")]),a._v("\nvboxmanage list vms\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打包")]),a._v("\nvagrant package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--base")]),a._v(" box_name_1503366286622_12977--output ./ubuntu_amd64.box\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--base")]),a._v(" 要打包的虚拟机名称\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--output")]),a._v(" 打包后的包名\n-- include 打包需要增加的文件，多个文件以逗号分隔\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--vagrantfile")]),a._v(" 指定vagrantfile文件\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("h1",{attrs:{id:"查看virtualbox-网路配置详情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看virtualbox-网路配置详情"}},[a._v("#")]),a._v(" 查看virtualbox 网路配置详情")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 命令行查询VBox虚拟机中的ip地址")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 先查询需要查看ip的虚拟机名称")]),a._v("\nVBoxManage list runningvms\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 再查看对应虚拟机的ip地址")]),a._v("\nVBoxManage guestproperty enumerate slaver1-51"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Net.*V4.*IP"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h1",{attrs:{id:"插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[a._v("#")]),a._v(" 插件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 作用： 复制宿主机文件到box内部")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装")]),a._v("\nvagrant plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vagrant-scp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例：")]),a._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" local_file vm_name:~/remote_file_path\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 详解")]),a._v("\n- vagrant： 命令\n- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" ：参数\n- local_file: 本地文件\n- vm_name: 虚拟机名称\n- ~/remot_file_path: 传输到虚拟机中的绝对路径位置\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[a._v("#")]),a._v(" scp")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 作用： 复制宿主机文件到box内部")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装")]),a._v("\nvagrant plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vagrant-scp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例：")]),a._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" local_file vm_name:~/remote_file_path\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 详解")]),a._v("\n- vagrant： 命令\n- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" ：参数\n- local_file: 本地文件\n- vm_name: 虚拟机名称\n- ~/remot_file_path: 传输到虚拟机中的绝对路径位置\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"vagrant-vbguest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vagrant-vbguest"}},[a._v("#")]),a._v(" vagrant-vbguest")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 作用：提高虚拟机效率")]),a._v("\nvagrant  plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("  vagrant-vbguest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装指定版本的vbguest插件")]),a._v("\nvagrant plugin "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vagrant-vbguest --plugin-version "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.21")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载插件")]),a._v("\nvagrant plugin uninstall vagrant-vbguest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);