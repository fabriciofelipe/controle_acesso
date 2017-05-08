module.exports.excluir = function(application, req, res){

	var dadosForm = req.body;
   
	
	req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
	
	

	var erros = req.validationErrors();

	if(erros){
		res.render('exclui', {validacao: erros, dadosForm: dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.excluirUsuario(dadosForm,req,res);

	
}