
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Hola, que gusto saludarte, bienvenido. Antes de iniciar la sesión de tutoría, me permito mencionarte que por el momento considero dos fases de la trayectoria escolar según el momento de intervención, estos son: inducción y egreso. Cada una aborda diferentes problemáticas, atendiendo diferentes necesidades a lo largo de tu instancia en la universidad. Así que dime, ¿En qué fase de atención necesitas ayuda?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(SKILL_NAME, MESSAGE_WELCOME)
            .reprompt(speechText)
            .getResponse();
    }
};
//Intent Información Inducción
const induccionHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'InduccionIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Los puntos importantes que se consideran en esta fase son los siguientes temas: La UADY, el programa educativo y el programa institucional de tutorías de la UADY. ¿De qué tema te gustaría informarte?'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_INDUCCION)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};
//Intent Información Egreso
const egresoHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'EgresoIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Los puntos importantes que se consideran en esta fase son los siguientes temas: Servicio social, prácticas profesionales, los campos profesionales, titulación y posgrado. ¿De qué tema te gustaría informarte?'
      ];

    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
    
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_EGRESO)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 1: La UADY 

const it1_UadyHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaUnoUadyIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'De acuerdo, la información que te puedo brindar de este tema, son los siguientes contenidos: Servicios, Información general acerca del Modelo Educativo para la Formación Integral. <break time="0.5s"/> Si deseas consultar información relevante de alguno de éstos, coméntame, ¿Cuál?'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
    
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_UADY)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 2: Programa Educativo
const it2_ProgramaEducativoHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaDosPEIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'De acuerdo, la información que te puedo brindar de este tema, son diferentes, desde el plan de estudios de la licenciatura, así como el perfil de egreso de ésta. <break time="1s"/> Si deseas consultar información relevante de alguno de éstos, coméntame, ¿Cuál?'
      ];

    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
    
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_PEDUCATIVO)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 3: El Programa Institucional de Tutorías
const it3_PITHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaTresPITIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Muy bien, el Programa Institucional de Tutoría de la UADY se dirige a atender las demandas de los tutorados relacionadas con su transición a la universidad, su tránsito curricular y su inserción ocupacional, favoreciendo su desarrollo académico, profesional y personal, a partir de la consideración de sus capacidades personales, necesidades y expectativas, asegurando su permanencia y egreso en tiempos puntuales, así como la maduración del proyecto personal y profesional del estudiante.  <break time="1s"/> Si deseas conocer más sobre el programa institucional de tutorías de la UADY, puedes preguntarme acerca de las fases de atención, o bien acerca de los actores involucrados.'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
    
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_PIT)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Egreso - Tema 1: Servicio Social
const et1_SSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaUnoSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'El servicio social es la actividad formativa y de aplicación de conocimientos que de manera temporal y obligatoria realizan los alumnos y/o pasantes de carreras técnicas o profesionales de la Universidad Autónoma de Yucatán, en beneficio de la sociedad y es una obligación realizarla. De acuerdo con el Reglamento de Servicio Social de la Universidad, éste puede iniciarse al acreditarse el 70% de los créditos del plan de estudios, es decir, luego de aprobar 263 créditos. Una vez teniendo este requisito esencial, podrás contactarte con el encargado el maestro Víctor Manuel Pech para hacer los trámites de solicitud del proyecto que deseas trabajar. Si deseas conocer la lista de proyectos para realizar el servicio social te invito a visitar el siguiente sitio web: www.serviciosocial.uady.mx . El servicio social se acreditará a través del Taller de Servicio Social con valor curricular de doce créditos. El propósito del taller es que el alumno realice un servicio social efectiva de su carrera con retribución a la sociedad. La calificación podrá ser de Aprobado o No Aprobado. Es importante que tengas en cuenta que para aprobar deberás tener una duración de seis meses como mínimo y de dos años como máximo y el número de horas que requiera será determinado por las características del programa al que se encuentre adscrito el prestador, pero en ningún caso será menor de 480 horas. <break time="1s"/> Si requiere información precisa o resolver dudas específicas, puede contactarse al correo del maestro Víctor Manuel Pech: victor.chi@correo.uady.mx, responsable de servicio social de la Licenciatura en Ingeniería de Software en la Unidad Multidisciplinaria Tizimín.'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
    
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Egreso - Tema 2: Prácticas Profesionales
const et2_PPHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaDosPPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'La práctica profesional, es la actividad de carácter formativo que un estudiante de la Universidad Autónoma de Yucatán realiza dentro o fuera de la institución educativa con el fin de desarrollar, perfeccionar y de esta forma consolidar las competencias adquiridas en el aula. Las prácticas profesionales podrán acreditarse luego de haber aprobado 150 créditos de las asignaturas obligatorias del plan de estudios; se considera que en ese momento ya contarán con los conocimientos y habilidades para poder desarrollarse al menos como programadores. <break time="1s"/> Las prácticas profesionales se acreditarán a través del Taller de Prácticas Profesionales con valor curricular de ocho créditos. El propósito del taller es que el alumno realice una práctica profesional efectiva de su carrera. La calificación podrá ser de Aprobado o No Aprobado. Para aprobarlo, el alumno deberá realizar al menos 320 horas de práctica que se acreditarán a través de un plan de trabajo inicial y los informes de actividades acordados en el plan, ambos deberán ser avalados por un tutor de la Facultad y por el responsable del programa en la Institución donde se realice la práctica. <break time="1s"/> Las horas prácticas se podrán realizar en las diferentes dependencias de la UADY o en cualquier otra institución, empresa u organización, previa solicitud y aprobación de la Secretaría Académica. Es deseable que el alumno realice sus prácticas profesionales en el transcurso de un solo semestre, sin embargo, se pueden considerar otras opciones sujetas a la aprobación de la Secretaría Académica y del Coordinador de la carrera. <break time="1s"/> Si requiere información precisa o resolver dudas específicas, puede contactarse al correo de la maestra Cinthia Maribel González Segura: gsegura@correo.uady.mx, responsable de las prácticas profesionales de la Licenciatura en Ingeniería de Software en la Unidad Multidisciplinaria Tizimín.'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaria informarte?')
      .getResponse();
      
       
  },
};

//Intent Egreso - Tema 3: Campos profesionales
const et3_CProfesionalesHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaTresCPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Te comento que en la UADY hay un sistema de bolsa de trabajo para que estudiantes y egresados se puedan registrar y puedan ver opciones de prácticas profesionales o de trabajo. El sistema se encuentra en la dirección www.bolsadetrabajo.uady.mx . Los estudiantes o egresados se registran en la pestaña Candidatos. El departamento de vinculación tiene que hacer una precarga antes con su CURP y matrícula. <break time="1s"/> Si estas interesado en integrarte, puedes enviar dichos datos al coordinador de la licenciatura en Ingeniería de Software, quien será el encargado de hacerlo llegar al coordinador de vinculación.'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Egreso - Tema 4: Titulación

const et4_TitulacionHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaCuatroTitulacionIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Los estudiantes del programa educativo podrán obtener el título de Licenciado(a) en Ingeniería de Software con alguna de las siguientes opciones:  <break time="1s"/> La primera opción es presentar el Examen General de Egreso de la Licenciatura (EGEL), en su versión de Ingeniería de Software (EGEL-ISOFT), al aprobar el total de créditos del Plan de Estudios. Se deberá obtener desempeño satisfactorio, por lo menos, en 50% de las áreas que lo conforman. <break time="1s"/> La segunda opción es elaborar y presentar una tesis, la tesis deberá elaborarse durante el proceso de formación y no al finalizar el Plan de Estudios, por lo que el PE contempla asignaturas optativas de investigación que le permitan el desarrollo de su tesis. Si se opta por esta opción, los estudiantes deberán llevar 3 asignaturas optativas de Seminario de Tesis.'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};


//Intent Egreso - Tema 5: Posgrado
const et5_PosgHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TemaCincoPosgIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'De acuerdo. Los estudios de posgrado corresponden al ciclo de estudios de especialización que se cursa tras el título de licenciatura. Comprende los estudios de especialización profesional, postítulos y programas conducentes a un nuevo grado académico como el de maestría y programas de doctorado. La decisión de realizar estudios de posgrado radica en ti. Si decides realizarla, actualmente existen las becas para posgrado, los cuales son apoyos económicos que se te pueden otorgar durante la realización del posgrado. Si estas interesado a realizar los estudios de posgrado, te recomiendo acudir o resolver tus dudas con tu tutor asignado, quien es el indicado para brindarte opciones y quien puede explicarte a detalle los procesos de beca. <break time="1s"/> Por el momento te puedo ayudar proporcionándote el siguiente enlace: donde puedes encontrar la oferta educativa en posgrado.'
      ];
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
    },
};

//Intent Inducción - Tema 1.1: Servicios 
const it1_1_ServiciosHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ServiciosIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'La misión de la UADY en este aspecto es prestar servicios escolares de calidad, mediante introducción de tecnologías de vanguardia en los procesos administrativos de control escolar, la actualización constante del sistema, la asesoría en las entidades universitarias y la capacitación continua del personal. <break time="1s"/> Entre los servicios que nos ofrece el Campus Unidad Multidisciplinaria Tizimín se encuentran las siguientes: Biblioteca, Centro de Atención al Estudiante, Centro de Cómputo y la Unidad Universitaria de Inserción Social. <break time="1s"/> Si deseas conocer más sobre alguno de estos servicios, puedes decirme ¿Cuál?'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_SERVICIOS)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
    },
};

//Intent Inducción - Tema 1.1.1: Biblioteca
const it1_1_1_BibliotecaHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'BibliotecaIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Actualmente es una biblioteca multidisciplinaria, su acervo contiene obras de las áreas de educación, enfermería, computación y contaduría. Su horario de servicio es de Lunes a Viernes de 8:00 A.M. a 8:00 P.M.<break time="1s"/>Puedes volver a pedir temas de inducción, la Uady o servicios'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaria informarte?')
      .getResponse();
    },
};

//Intent Inducción - Tema 1.1.2: Centro de Atención al Estudiante (CAE)
const it1_1_2_CAEHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'CAEIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'El Centro de Atención al Estudiante ofrece diversos servicios como: Dudas y apoyo en trámite de becas, solicitudes en reposición de credencial universitaria, certificado de servicio social y constancia de inglés. Dudas y apoyo en trámite de movilidad estudiantil, suministro de condones, difusión de información de interés para los estudiantes, atención psicológica. Su horario de servicio es de Lunes a viernes de 8:00 A.M. a 3:30 P.M. .Puedes contactarte en Facebook desde su página: CAE Unidad Multidisciplinaria Tizimín.<break time="1s"/> Puedes volver a pedir temas de inducción, la Uady o servicios'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 1.1.3: Centro de Cómputo
const it1_1_3_CCHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'CCIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;

  const data = [
      'El Centro de Cómputo ofrece los siguientes servicios: préstamo de equipos en el centro de cómputo, préstamos externos, préstamo de aulas de cómputo, impresiones, escaneo de imágenes y documentos, videoconferencias, asesoría técnica, asesoría operativa, reparación y mantenimiento preventivo y correctivo de equipos de cómputo. Su horario de servicio es de Lunes a Jueves de 07:00 AM a 8:00 PM y Viernes de 07:00 AM a 7:00 PM. <break time="1s"/> Puedes volver a pedir temas de inducción, la Uady o servicios'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 1.1.4: Unidad Universitaria de Inserción Social, Tizimín
const it1_1_4_UUISHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'UUISIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'La Unidad Universitaria de Inserción Social, es una unidad de primer nivel de atención que proporciona cuidados de calidad con sentido humanista, para elevar el nivel de bienestar de las personas de la región oriente del estado, fomentando la participación y la formación integral de estudiantes, prestadores de servicio social y docentes de la Universidad Autónoma de Yucatán. Ofrece los siguientes servicios: consulta médica, cuidado de enfermería como inyecciones, retiro de puntos, lavado de oídos, control de diabetes, control de hipertensión arterial, control de temperatura, entre otros. <break time="1s"/> Puedes volver a pedir temas de inducción, la Uady o servicios'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 1.2: Modelo Educativo para la Formación Integral MEFI
const it1_2_MEFIHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'MEFIIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Para la UADY, el MEFI es la propuesta para promover la Formación Integral del estudiantado bajo una filosofía humanista.  El MEFI promueve la Formación Integral del estudiante por medio de la interacción de seis ejes: Responsabilidad Social, Flexibilidad, Innovación, Internacionalización, Educación Centrada en el Aprendizaje y Educación Basada en Competencias. Estos ejes son fundamentales porque orientan el trabajo académico y administrativo de la Universidad. <break time="1s"/> Para más información puedes recurrir con el coordinador de la licenciatura, quien te puede informar a profundidad acerca del MEFI.<break time="1s"/> Puedes volver a pedir temas de inducción'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 2.1: Plan de Estudios
const it2_1_PlanHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'PlanEstudiosIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Para obtener información acerca de plan de la licenciatura, ingresa en la página www.matematicas.uady.mx y dirígete a la sección de planes de estudios de licenciaturas, y ahí podrás encontrar el plan de estudios de la Licenciatura en Ingeniería de Software. Ente sitio web te brinda información como los Objetivos, Perfil de Ingreso, Plan de estudios MEFI, Malla Curricular MEFI, Guía del estudiante, Plan en liquidación, Plan Desarrollo e Informes de la licenciatura. En caso requieras resolver algunas de tus dudas sobre asignaturas, puedes consultar la malla curricular disponible en el plan de estudios. <break time="1s"/> Puedes volver a pedir temas de inducción o sobre programa educativo'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 2.2: Perfil de Egreso
const it2_2_PerfilHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'PerfilEgresoIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Al concluir la Licenciatura en Ingeniería de Software el egresado tendrás conocimientos, habilidades y actitudes. ¿Qué tipo de información del perfil de egreso necesitas?'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_PERFILEGRESO)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 2.2.1: Conocimientos
const it2_2_1_ConocimientosHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ConocimientosIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Al concluir tus estudios en Ingeniería de Software tendrá conocimientos sobre: Metodologías y técnicas para el desarrollo de software. Las ciencias computacionales, que le permitan la aplicación viable de algoritmos. Las herramientas para la especificación y el modelado de sistemas de software. Administración y optimización de tiempo y costo de los recursos involucrados en el desarrollo de software. Áreas de investigación relacionadas con la Ingeniería de Software, entre otros. <break time="1s"/> Puedes volver a pedir temas de inducción, el programa educativo o perfil de egreso'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 2.2.2: Habilidades
const it2_2_2_HabilidadesHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'HabilidadesIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Al concluir tus estudios en Ingeniería de Software tendrás habilidades para: Trabajar como parte de un equipo en el desarrollo y evolución de productos de software. Explicar el proceso para determinar las necesidades del cliente y traducirlos a requisitos de software. Diseñar soluciones apropiadas en una o más áreas de concentración. Entender y aplicar teorías, modelos y técnicas que provean una base para el diseño, desarrollo, verificación e implantación del software, entre otros. <break time="1s"/> Puedes volver a pedir temas de inducción, el programa educativo o perfil de egreso'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 2.2.3: Actitudes
const it2_2_3_ActitudesHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ActitudesIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Liderazgo en equipos de trabajo multidisciplinarios. Perseverancia en la solución de problemas. Capacidad de mantenerse actualizado en su área de trabajo. Responsabilidad y ética en su desempeño profesional. Conducta emprendedora e innovadora, entre otros.. <break time="1s"/> Puedes volver a pedir temas de inducción, el programa educativo o perfil de egreso'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 3.1: Fases de Atención
const it3_1_FasesHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'FasesAtencionIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Para su adecuado funcionamiento, el PIT considera tres fases de la trayectoria escolar: inducción, tránsito y egreso. Como se han percatado, yo no podría brindarles información o ayuda en la fase de tránsito, debido a que se tratan temas subjetivas y personales estrechamente con el estudiante, y por el momento yo no tengo emociones y sentimientos. ¡Lo siento mucho!. <break time="1s"/> Puedes volver a pedir temas de inducción, el programa institucional de tutorías'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 3.2: Actores involucrados
const it3_2_ActoresHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ActoresIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Existen diversos actores implicados en el desarrollo de la acción tutorial, sin embargo, los principales son el tutor y el tutorado.  <break time="1s"/> Si deseas consultar información de alguno de estos actores, dime ¿De quién sería?'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, MESSAGE_ACTORES)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 3.2.1: Tutor
const it3_2_1_TutorHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TutorIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'El tutor es el profesor de grupo que guía a un estudiante o grupo de estudiantes en la toma de decisiones académicas, personales y administrativas, favoreciendo la permanencia y conclusión exitosa de su formación y, cuando es necesario, lo transfiere a otro tipo de apoyo, tales como servicios de orientación educativa, Centro a Atención al Estudiante de la UADY, asesorías, entre otros. Entre algunas de sus funciones están: Apoyar la permanencia y egreso de los estudiantes mediante orientación académica, profesional, administrativa y personal. Promover la formación integral y los ejes establecidos en el Modelo Educativo. Fomentar el aprendizaje autónomo en el estudiante de manera continua. Identificar las características de sus estudiantes tutorados y promover el desarrollo de sus potencialidades académicas y personales. Identificar situaciones de riesgo académico y personal en el estudiante de manera oportuna para referirlos de forma pertinente. Estos son algunos de las funciones más relevantes del tutor. <break time="1s"/> Puedes volver a pedir temas de inducción, el programa institucional de tutorías'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inducción - Tema 3.2.2: Tutorado
const it3_2_2_TutoradoHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TutoradoIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'En pocas palabras el tutorado eres tú. Es decir, el estudiante que recibe apoyo y orientación académica, administrativa, profesional o personal de un tutor, a través de un conjunto de actividades que favorecerán el logro de su trayectoria académica y su desarrollo integral. Los compromisos que debes cumplir como tutorado son las siguientes: Responder a las demandas de la acción tutorial en sus tres fases: inducción, tránsito y egreso. Cumplir los acuerdos con su tutor en el desarrollo de las actividades que acuerden conjuntamente. Participar en los procesos de evaluación del trabajo tutorial, de acuerdo con los mecanismos institucionales establecidos. Participar en las actividades complementarias que se promuevan dentro del PIT. <break time="1s"/> Puedes volver a pedir temas de inducción, el programa institucional de tutorías'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inicio SS
const InicioSSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'InicioSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'De acuerdo con el Reglamento de Servicio Social de la Universidad, éste puede iniciarse al acreditarse el 70% de los créditos del plan de estudios, es decir, luego de aprobar 263 créditos. '
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Responsable SS
const ResponsableSSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ResponsableSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'El responsable de servicio social de la Licenciatura en Ingeniería de Software en la Unidad Multidisciplinaria Tizimín es el maestro Víctor Manuel Pech. Es el encargado de realizar los trámites de solicitud del proyecto que deseas trabajar en el servicio social, así como de guiarte en el proceso de servicio social. <break time="1s"/> Si requiere información precisa o resolver dudas específicas sobre el servicio social, puede contactarse al correo: victor.chi@correo.uady.mx'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Responsable SS
const LugarSSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'LugarSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Si deseas conocer los lugares donde puedes realizar tu servicio social puedes consultar la lista de proyectos en el siguiente sitio web: www.serviciosocial.uady.mx .'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Requisitos SS
const RequisitosSSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'RequisitosSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'El servicio social se acreditará a través del Taller de Servicio Social con valor curricular de doce créditos. El propósito del taller es que el alumno realice un servicio social efectiva de su carrera con retribución a la sociedad. La calificación podrá ser de Aprobado o No Aprobado.'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Tiempo SS
const TiempoSSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TiempoSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Deberás tener una duración de seis meses como mínimo y el número de horas que requiera será determinado por las características del programa al que se encuentre adscrito el prestador, pero en ningún caso será menor de 480 horas.'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Derechos y obligaciones SS
const ObligacionSSHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ObligacionSSIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Dicha información puedes encontrarla en el siguiente sitio web: www.saie.uady.mx/servicio_social . En este sitio podrás encontrar los derechos y obligaciones de un estudiante que realiza el servicio social, así como el reglamento de éste.'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Inicio PP
const InicioPPHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'InicioPPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Las prácticas profesionales podrán realizarse luego de haber aprobado 150 créditos de las asignaturas obligatorias del plan de estudios; se considera que en ese momento ya contarán con los conocimientos y habilidades para poder desarrollarse al menos como programadores.'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Responsable PP
const ResponsablePPHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'ResponsablePPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'La responsable de las prácticas profesionales de la Licenciatura en Ingeniería de Software en la Unidad Multidisciplinaria Tizimín es la maestra Cinthia Maribel González Segura. Es la encargada de guiarte en tu proceso de prácticas profesionales. <break time="1s"/> Si requieres información precisa o resolver dudas específicas sobre las prácticas profesionales, puede contactarse al correo: gsegura@correo.uady.mx'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Lugar PP
const LugarPPHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'LugarPPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Las horas prácticas se podrán realizar en las diferentes dependencias de la UADY o en cualquier otra institución, empresa u organización, previa solicitud y aprobación de la Secretaría Académica y del Coordinador de la carrera'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Requisitos PP
const RequisitosPPHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'RequisitosPPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'Las prácticas profesionales se acreditarán a través del Taller de Prácticas Profesionales con valor curricular de ocho créditos. El propósito del taller es que el alumno realice una práctica profesional efectiva de su carrera. La calificación podrá ser de Aprobado o No Aprobado.  Se acreditarán a través de un plan de trabajo inicial y los informes de actividades acordados en el plan, ambos deberán ser avalados por un tutor de la Facultad y por el responsable del programa en la Institución donde se realice la práctica.'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

//Intent Tiempo PP
const TiempoPPHandler = {
    
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'TiempoPPIntent';
  },
  handle(handlerInput) {
  const request = handlerInput.requestEnvelope.request;
  
  const data = [
      'El alumno deberá realizar al menos 320 horas de práctica. Es deseable que el alumno realice sus prácticas profesionales en el transcurso de un solo semestre, sin embargo, se pueden considerar otras opciones sujetas a la aprobación de la Secretaría Académica.'
      ];
    
    
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .reprompt('¿De qué te gustaría informarte?')
      .getResponse();
      
       
  },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = '¿En qué puedo ayudarte?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Hasta pronto, si necesitas ayuda para resolver tus dudas, aqui estaré para atenderte';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        const speechOutput = 'Ha finalizado la sesión, si requiere nuevamente iniciarla, deberá invocarme nuevamente.';

        return handlerInput.responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé nada de eso. Por el momento no puedo responder a esa solicitud. Intenta de nuevo otra solicitud';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Lo siento, no puedo entender tu solicitud. Por favor, intenta de nuevo.')
      .reprompt('Lo siento, no puedo entender tu solicitud. Por favor, intenta de nuevo.')
      .getResponse();
  },
};

const SKILL_NAME = 'Información del Tutor UMT';
const MESSAGE_WELCOME = 'Te puedo ayudar en las siguientes fases de atención:\n \n1. Inducción\n2. Egreso';
const MESSAGE_INDUCCION = 'En esta fase te puedo ayudar en los siguientes temas:\n \n1. La UADY\n2. El Programa Educativo\n3. El Programa Institucional de Tutorías (PIT) de la UADY';
const MESSAGE_EGRESO = 'En esta fase te puedo ayudar en los siguientes temas:\n \n1. Servicio social\n2. Prácticas profesionales\n3. Campos Profesionales\n4. Titulación\n5. Posgrado';
const MESSAGE_UADY = 'La información que te puedo brindar de este tema, son los siguientes contenidos: \n \n1. Servicios\n2. Modelo Educativo para la Formación Integral (MEFI)';
const MESSAGE_SERVICIOS = 'La misión de la UADY en este aspecto es prestar servicios escolares de calidad, mediante introducción de tecnologías de vanguardia en los procesos administrativos de control escolar, la actualización constante del sistema, la asesoría en las entidades universitarias y la capacitación continua del personal.\n \nServicios:\n \n1. Biblioteca\n2. Centro de Atención al Estudiante (CAE)\n3. Centro de Cómputo\n4. Unidad Universitaria de Inserción Social (UUIS).';
const MESSAGE_PEDUCATIVO = 'La información que te puedo brindar de este tema son las siguientes:\n  \n1. Plan de estudios\n2. Perfil de Egreso';
const MESSAGE_PERFILEGRESO = 'Al concluir la Licenciatura en Ingeniería de Software tendrás:\n \n1. Conocimientos\n2. Habilidades\n3. Actitudes.';
const MESSAGE_PIT = 'El Programa Institucional de Tutoría de la UADY se dirige a atender las demandas de los tutorados relacionadas con su transición a la universidad, su tránsito curricular y su inserción ocupacional, favoreciendo su desarrollo académico, profesional y personal, a partir de la consideración de sus capacidades personales, necesidades y expectativas, asegurando su permanencia y egreso en tiempos puntuales, así como la maduración del proyecto personal y profesional del estudiante. Si deseas conocer más sobre el programa institucional de tutorías de la UADY, puedes preguntarme acerca de:\n \n1. Las fases de atención\n2. Actores involucrados.';
const MESSAGE_ACTORES = 'Existen diversos actores implicados en el desarrollo de la acción tutorial, sin embargo, los principales son:\n \n1. El tutor\n2. El tutorado';
const HELP_MESSAGE = '¿En qué te puedo ayudar';
const HELP_REPROMPT = '¿De qué te gustará informarte?';
const STOP_MESSAGE = 'Hasta pronto y <say-as interpret-as="interjection">Buena suerte, espero haya resuelto con éxito tus dudas</say-as>';


// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        induccionHandler,
        egresoHandler,
        it1_UadyHandler,
        it2_ProgramaEducativoHandler,
        it3_PITHandler,
        et1_SSHandler,
        et2_PPHandler,
        et3_CProfesionalesHandler,
        et4_TitulacionHandler,
        et5_PosgHandler,
        it1_1_ServiciosHandler,
        it1_1_1_BibliotecaHandler,
        it1_1_2_CAEHandler,
        it1_1_3_CCHandler,
        it1_1_4_UUISHandler,
        it1_2_MEFIHandler,
        it2_1_PlanHandler,
        it2_2_PerfilHandler,
        it2_2_1_ConocimientosHandler,
        it2_2_2_HabilidadesHandler,
        it2_2_3_ActitudesHandler,
        it3_1_FasesHandler,
        it3_2_ActoresHandler,
        it3_2_1_TutorHandler,
        it3_2_2_TutoradoHandler,
        InicioSSHandler,
        ResponsableSSHandler,
        LugarSSHandler,
        RequisitosSSHandler,
        TiempoSSHandler,
        ObligacionSSHandler,
        InicioPPHandler,
        ResponsablePPHandler,
        LugarPPHandler,
        RequisitosPPHandler,
        TiempoPPHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
