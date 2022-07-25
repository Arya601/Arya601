<?php
$degree1=$_POST["degree1"];
$degree2=$_POST["degree2"];

$total=$degree1+$degree2;

$red=intdiv(total,100000000);

$total=$total-$red*100000000;
$green=intdiv(total,1000000);

$total=$total-$green*1000000;
$blue=intdiv(total,10000);

$total=$total-$blue*10000;
$white=intdiv(total,100);

$black=$total-$white*100;



$html = <<< HEREDOC
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>心理測驗結果</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
<table align="center">
            <tbody><tr>
                <td colspan="2">
					<label>紅馳：{$red}</label>
					<label>綠躍：{$green}</label>
					<label>藍行：{$blue}</label>
					<label>銀倚：{$white}</label>
					<label>墨佇：{$black}</label>
                </td>
            </tr>			
		</tbody>
	</table>

</body>
</html>
HEREDOC;

echo $html;
?>