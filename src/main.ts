type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1 A)
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = pacientes.filter(
    (paciente: Pacientes): boolean => {
      return paciente.especialidad === "Pediatra";
    }
  );

  return pacientesPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//APARTADO 1 B)
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatriaMenorDe10: Pacientes[] = pacientes.filter(
    (paciente: Pacientes): boolean => {
      return paciente.especialidad === "Pediatra" && paciente.edad < 10;
    }
  );

  return pacientesPediatriaMenorDe10;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//APARTADO 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = pacientes.some((paciente: Pacientes): boolean => {
    if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
      return true;
    } else {
      return false;
    }
  });

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//APARTADO 3
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados: Pacientes[] = pacientes.map(
    (paciente: Pacientes): Pacientes => {
      if (paciente.especialidad === "Pediatra") {
        return {
          ...paciente,
          especialidad: "Medico de familia",
        };
      } else {
        return paciente;
      }
    }
  );

  return pacientesReasignados;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);

//APARTADO 4
const noHayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const arePacientesNotInPediatria = pacientes.every(
    (paciente: Pacientes): boolean => {
      if (paciente.especialidad !== "Pediatra") {
        return true;
      } else {
        return false;
      }
    }
  );

  return arePacientesNotInPediatria;
};

console.log(noHayPacientesDePediatria(pacientesReasignados));

//APARTADO 4 B
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const hayPacientesEnPediatria = pacientes.some(
    (paciente: Pacientes): boolean => {
      return paciente.especialidad == "Pediatra";
    }
  );

  return hayPacientesEnPediatria;
};

console.log(
  HayPacientesDePediatria(pacientesReasignados),
  HayPacientesDePediatria(pacientes)
); // Compruebo ambos arrays para ver si funciona

//APARTADO 5
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {

  const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  numeroPacientesPorEspecialidad.medicoDeFamilia = pacientes.reduce((acc: number, paciente: Pacientes): number => {
    if (paciente.especialidad == "Medico de familia") {
      acc += 1;
    }
    return acc;
  }, 0);

  numeroPacientesPorEspecialidad.pediatria= pacientes.reduce((acc: number, paciente: Pacientes): number => {
    if (paciente.especialidad == "Pediatra") {
      acc += 1;
    }
    return acc;
  }, 0);

  numeroPacientesPorEspecialidad.cardiologia= pacientes.reduce((acc: number, paciente: Pacientes): number => {
    if (paciente.especialidad == "Cardiólogo") {
      acc += 1;
    }
    return acc;
  }, 0);

  return numeroPacientesPorEspecialidad
};

console.log(cuentaPacientesPorEspecialidad(pacientes))