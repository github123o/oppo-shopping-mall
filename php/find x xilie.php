<?php
$con = mysqli_connect('localhost','root','123456''oppo hypermark');
print_r($con);
$sql = "SELECT*FROM*'find x 系列'";
$res = mysqli_query($con,$sql);
if(!$res){
    die('error'. mysqli_error());
}
print_r($res);

?>