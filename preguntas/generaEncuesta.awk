BEGIN{
	FS=",";
	print "{";
}

{
    if (($2+1)>1){
        _ID = $2;
        _PREGUNTA = $3;

        printf("  {\n   \"Id\": \"%s\",\n", _ID );
        printf("   \"Pregunta\": \"%s\",\n", _PREGUNTA );

        printf("   \"Opciones\": [\n");

        for (i=1;i<=5;i++){
            _OPTION=$(3+i);
            if (length(_OPTION)){
                ask[i] = _OPTION;
                ask[0] = i;
            }
        }

        for (i=1;i<ask[0];i++){
            printf("\t\"%s\",\n", ask[i]);
        }
        printf("\t\"%s\"\n", ask[ask[0]]);
        print "\t]\n  }";

	}
}

END{
	print "}";
}
