function UsuariosDAO(connection){
	this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario,req,res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.insert(usuario);
			res.send("Usuário inserido com sucesso");
			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.consultarUsuario = function(usuario,req,res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			  collection.find({usuario:{$eq:usuario.usuario}}).toArray(function(err, result){
				  if(result[0] != undefined && usuario.operacao == 'consultar'){
					  res.render("consulta", {result:result});
				    }
				 if(result[0] != undefined && usuario.operacao == 'alterar'){
					  res.render("altera", {result:result});
				    }	
				if(result[0] != undefined && usuario.operacao == 'excluir'){
					 res.render("exclui", {result:result});
				    } 
				if(result[0] == undefined){
					  res.send("Usuário não encontrado");
				    }
				
		
			mongoclient.close();
		});
	});
	});
}


UsuariosDAO.prototype.alterarUsuario = function(usuario,req,res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.update({ usuario: usuario.usuario }, { $set: { nome: usuario.nome,  tipo: usuario.tipo } });
			res.send("Usuário alterado com sucesso");
			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.excluirUsuario = function(usuario,req,res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.remove(usuario);
			res.send("Usuário excluido com sucesso");
			mongoclient.close();
		});
	});
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find(usuario).toArray(function(err, result){

         if(result[0] != undefined && result[0].tipo == 'administrador' && result[0].senha == usuario.senha && result[0].usuario == usuario.usuario){


					req.session.autorizado = true;
					req.session.usuario = result[0].usuario;
						
				}

				if(req.session.autorizado){
				  	res.redirect("home");
				 } 
				else {
					res.render("index",{validacao:{msg:'Usuário não autorizado'}});
				}

			});
			mongoclient.close();
		});
	});
}


module.exports = function(){
	return UsuariosDAO;
}