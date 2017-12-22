<?php
	$user = $_POST[ "usuario" ];
	$text = $_POST[ "texto" ];
	$link = mysqli_connect( "localhost", "root", "" );
	mysqli_select_db( $link, "chatdb" );
	if( !$link )
	{
		die( 'Could not connect: ' . mysqli_error() );
	}
	$query = "INSERT INTO chat (usuario, texto) VALUES ('" . $user . "','" . $text . "');";
	mysqli_query( $link, $query );
	mysqli_close( $link );
	echo '<meta http-equiv="refresh" content="0;url=index.html">';
?>
