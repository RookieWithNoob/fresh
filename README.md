
[toc]
### DailyFreshDemo

#####	天天生鲜：小型电商购物网站，基于Python3.x和Django2.x  

​	项目尽量使用Django内部提供的API,后台管理为Django自带的管理系统django-admin,适合Django的小型实战项目。

***

#### 功能简介：

- 商品浏览：商品的图片，售价，种类，简介以及库存等信息。

- 全文检索：支持对商品种类以及商品名称，简介的检索。

- 登录注册：用户的登录与注册。

- 用户中心：支持用户个人信息，收货地址等信息的更新，商品加入购物车，订单生成。

- 商品下单：在支付接口和企业资质的支持下可完成商品的下单功能，按照原子事务处理，下单异常则终止此次下单过程。

- 后台管理：支持后台管理功能，商品及用户信息的增加，更新与删除，可自定制样式与功能，日志，以及权限的管理和分配。

  ***

#### 预览：

1. 首页:

![image](https://github.com/CarrymeQUQ/myimages/blob/master/images/WHM7VR~G~9F_M%5BV~CM0%24U%40X.png)

2. 登录:

login
![image](https://github.com/CarrymeQUQ/myimages/blob/master/images/%5BSACVK~%5BDQQ3UL7NB8G26%24H.png)

3. 用户中心页面:

user
![image](https://github.com/CarrymeQUQ/myimages/blob/master/images/JF7H6%40POP3OG~5%5BP2HH2ULD.png)

4. 购物车:

cart
![image](https://github.com/CarrymeQUQ/myimages/blob/master/images/JF7H6%40POP3OG~5%5BP2HH2ULD.png)

5. 管理登入页面:

admin
![image](https://github.com/CarrymeQUQ/myimages/blob/master/images/0AMDD(TXO9~N)HR%60%40I3%5D5Z2.png)

[更多页面]:https://github.com/CarrymeQUQ/myimages/tree/master/images

***

#### 安装：

>  依赖包安装

> 下载文件进入项目目录之后，使用pip安装依赖包

`pip install -Ur pip_list.txt`

#### 相关步骤:

>  数据库配置

>  数据库使用MySQL

>  创建超级用户

>  终端下执行:`python manage.py createsuperuser`

>  然后输入相应的超级用户名以及密码，邮箱即可。

>  开始运行

>  终端下执行:`python manage.py runserver`


