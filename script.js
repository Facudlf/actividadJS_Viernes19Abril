function cargarGrilla() {
    //alert('cargando grilla desde codigo en html...');
  
    fetch('https://labsys.frc.utn.edu.ar/dds-express/api/articulosfamilias')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Aquí puedes hacer cualquier manipulación o uso de los datos obtenidos
        let contenido = '';
        for (let i = 0; i < data.length; i++) {
          contenido += ` <tr>
         <td>${data[i].IdArticuloFamilia}</td>
         <td>${data[i].Nombre}</td>
       </tr>`;
        }
  
        document.getElementById('contenidoTabla').innerHTML = contenido;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  function cargarPais() {
    fetch('https://restcountries.com/v3.1/subregion/South%20America')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Aquí puedes hacer cualquier manipulación o uso de los datos obtenidos
        let contenido = '';
        for (let i = 0; i < data.length; i++) {
          let moneda = data[i].currencies;
          let nombreMoneda = [];
          for (let codigoMoneda in moneda) {
            nombreMoneda.push(moneda[codigoMoneda].name);
          }
  
          contenido += ` <tr>
          <td>${data[i].name.official}</td>
          <td>${data[i].population}</td>
          <td>${nombreMoneda}</td>
        </tr>`;
        }
  
        document.getElementById('contenidoTablaPais').innerHTML = contenido;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  