<html>
<head>
</head>
<body>
<!-- 这一行method 对应的值改为post --->
<!--<form action="req.php" method="post">-->
<!--    <input type="text" name="username"/><br>-->
<!--    <input type="password" name="pwd"/><br>-->
<!--    <input type="submit" name="submit" value="提交"/>-->
<!--</form>-->
</body>
</html>


<?php
//1 变量
//$name='李安';
//$b=2000;
//$c = 210;
//$a = $b+$c;
//$u = $_POST['username'];
//echo $u.'<br />';
////$_POST['pwd']，将pwd作为字符串放在中括号里面，就得到了表单里面的<input type="text" name="pwd"/>的值
//$passwd = $_POST['pwd'];
//echo $passwd.'<br />';

//2 常量
define('MY_NUM',12);
//echo '我的数字是',MY_NUM;

//3 超全局变量
//$_GET('key') $_POST  $_REQUEST $_COOKIE $_SERVER $_FILES $_ENV

//var_dump 对象的类型和值
//var_dump(MY_NUM);

//4 数据类型 string integer boolean float/double resource array object null
/*
 * 字界符 <<<NAME  NAME 包裹和解析长字符
 * */
// 长字符
$_s =<<<S
     如果
      非要在这个测试
    前
        面<br />
       加上一段
    <i>有趣的话</i>
    我想说，<h1>努力学习不好么<h1>
S;
echo $_s;
/*5 单引号和双引号区别
1 单引号不解析，双引号解析变量
2在双引号里面插入变量，变量后面如果有英文或中文字符，会把这个字符和变量拼起来，视为一整个变量。一定要在变量后面接上特殊字符，例如空格等分开。
3 如果在双引号里面插变量的时候，后面不想有空格，可以拿大括号将变量包起来。
4 双引号解析转义字符，单引号不解析转义字符。但是单引号能解析\
5 单引号效率高于双引号，尽可能使用单引号
6 双引号和单引号可以互相嵌套，双引号中可以插入单引号，单引号当中插入变量，这个变量会被解析。
7 神奇的字符串拼接胶水——（.）点，用来拼接字符串。
8 一般将定界符声明字符串视为双引号一样的功能来看待。

 * */

//6 判断数据类型方法： is_int is_boolean等

//7 运算方法 + - % * / ++ --
//8 比较运算符 > < === <= >= !==
//9 逻辑运算符 && || !
//10 位运算符
//11 三元运算符 条件?结果1:结果2
/*
 * 12 控制語句
 * 1 if语句条件
 * if(){}elseif(){}else{}
 *if嵌套
 * if(){if(){}}
 * 2 switch
 * 3 while do...while
 * 4 for
 * 5 goto  可能会导致代码难以理解和维护，因此应尽量避免使用。 用continue和break替代
 * */

goto wan;
echo '天王盖地虎';
wan:
echo '小鸡炖蘑菇';


/*
 * 13 内置函数
 * 1 isset()判空
 * */
?>

