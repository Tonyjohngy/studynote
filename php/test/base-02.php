<?php

/*
 * 1 php函数
  Function 函数名(参数名1=[值1], 参数名2=[值2] , 参数名n=[值n])
{
    函数中的功能体
    [return 返回值]
}
include调用 类似import
<?php
//user.php
include "function-test-02.php";
//可以直接调用
demo();
test();
?>
  */
function func1($a=1){
    echo $a;
}
echo func1(2);
//2 数组遍历
//3 操作数组函数
//4 正则表达式
//5 文件系统管理
//6 魔法方法
use Goutte\Client;

$client = new Client();

$crawler = $client->request('GET', 'http://www.baidu.com/');

$crawler->filter('a')->each(function ($node) {
    print $node->attr('href')."\n";
});
