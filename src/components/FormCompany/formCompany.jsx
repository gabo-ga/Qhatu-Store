import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import supervisorProfile from '../../pages/supervisorProfile/supervisorProfile';
import { registerUser } from '../FirebaseConfig'
import { useNavigate } from "react-router-dom";
import './formCompany.css'

const FormCompany = () => {
    const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombreEmp: /^[a-zA-Z\.\-\s]{2,40}$/, // Letras, y puntos
	Direccion: /^(?=.*[a-zA-Z])(?!.*[!$%()=?¡¿'¨"+[~^`{}*])(?!.*[\t\n])([A-Z a-z\d]|[^ ]){3,39}$/,
	telefono: /^[6-7][0-9]{8}$/, // 4 a 12 digitos.
	nombreRep: /^[a-zA-Z\.\-\s]{2,40}$/ // 7 a 14 numeros.
}

const campos = {
	NombreEmp: false,
	Direccion: false,
	telefono: false,
	NombreRep: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombreEmp":
			validarCampo(expresiones.nombreEmp, e.target, 'nombreEmp');
		break;
		case "direccion":
			validarCampo(expresiones.Direccion, e.target, 'direccion');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "nombreRep":
			validarCampo(expresiones.nombreRep, e.target, 'nombreRep');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
    return( 
    <><main>
			<section>
				<form action="" class="formulario" id="formulario">
					<div class="formulario__grupo" id="grupo__nombreEmp">
						<label for="nombreEmp" class="formulario__label">Nombre de la empresa</label>
						<div class="formulario__grupo-input">
							<input type="text" class="formulario__input" name="nombreEmp" id="nombreEmp" placeholder="Pil Andina" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="formulario__input-error">El nombre tiene que ser de 2 a 40 dígitos y solo puede contener letras</p>
					</div>
					<div class="formulario__grupo" id="grupo__direccion">
						<label for="direccion" class="formulario__label">Direccion de la central</label>
						<div class="formulario__grupo-input">
							<input type="text" class="formulario__input" name="direccion" id="direccion" placeholder="Av. America" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="formulario__input-error">La direccion tiene que ser de 2 a 40 dígitos y solo puede contener numeros y letras</p>
					</div>
					<div class="formulario__grupo" id="grupo__telefono">
						<label for="telefono" class="formulario__label">Telefono del representante</label>
						<div class="formulario__grupo-input">
							<input type="email" class="formulario__input" name="telefono" id="telefono" placeholder="70392999" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="formulario__input-error">El numero del representante solo debe incluir numeros</p>
					</div>


					<div class="formulario__grupo" id="grupo__nombreRep">
						<label for="nombreRep" class="formulario__label">Nombre del representante</label>
						<div class="formulario__grupo-input">
							<input type="text" class="formulario__input" name="nombreRep" id="nombreRep" placeholder="Jose Garcia" />
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="formulario__input-error">El nombre del representante solo debe contener letras</p>
					</div>

					<div class="formulario__mensaje" id="formulario__mensaje">
						<p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente.</p>
					</div>

					<div class="formulario__grupo formulario__grupo-btn-enviar">
						<button type="submit" class="formulario__btn">Enviar</button>
						<p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
					</div>
				</form>
			</section>
		</main>
	</>);
}