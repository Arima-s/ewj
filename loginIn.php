<?php
session_start();
$mysqli=mysqli_connect("localhost","root","","ewj");
$name=$_POST["loginKey"];
$passowrd=$_POST["password"];
if($name!="" && $passowrd!=""){
	$sql = "SELECT * FROM user WHERE name='$name' and password='$passowrd'";
	$res = mysqli_query($mysqli,$sql);
	$rows=mysqli_num_rows($res);
	if($rows){
		$_SESSION['username'] = $name;
		echo "<script>alert('登陆成功！');location='index.php';</script>";
		/*header("location:index.php");
		exit;*/
	}
	else{
	 	echo "<script> alert('请输入正确的用户名或密码');history.back();</script>";	
	}
	mysqli_free_result($res);
	mysqli_close($mysqli);
}else{
	echo "<script>alert('请输入完整！');history.back();</script>";
}
?>
