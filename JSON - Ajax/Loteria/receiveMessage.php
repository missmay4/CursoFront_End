<?php
	$link = mysqli_connect( "localhost", "root", "" );
	mysqli_select_db( $link, "chatdb" );
	if( !$link )
	{
		die( 'Could not connect: ' . mysql_error() );
	}
	//$query = "SELECT * FROM chat ORDER BY cod DESC limit 0, 10";
	$query = "SELECT * FROM chat ORDER BY cod";
	$result = mysqli_query( $link, $query );
	while( $row = mysqli_fetch_array( $result ) )
	{
		echo "<b>";
		echo $row[ "usuario" ];
		echo ":</b> ";
		echo $row[ "texto" ];
		echo "<br />";
	}
	mysqli_close( $link );
?>
