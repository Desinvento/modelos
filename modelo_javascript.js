(function(){

	"use strict";

	var agendamento;
	var dataEnvio;

	$(document).ready( cbReady );

	function cbReady(){
		initVars();
		addEvents();
	};

	function initVars() {
		agendamento = $("[name=agendamento]");
		dataEnvio 	= $("#data_envio");
	};

	function addEvents() {
		agendamento.change( toggleDataEnvio ).trigger("change");
	};

	function toggleDataEnvio(){

		var checkedVal = $(this).filter(":checked").val();

		if( checkedVal )
			dataEnvio.prop( "disabled", checkedVal == "agora" );
	}

})();