import { showToast } from "../../utils/utils.js";

// Función para enviar el comando
export async function sendCommand(id_unit, cmd) {
      const body = {
        idTra: id_unit,
        idCmd: cmd,
      };

      try {
        const response = await axios.post("http://ws4cjdg.com/MonitoreoHRH/src/api/Meerkat/meerkat.api.php",
          body,
          {
            headers: { "Content-Type": "application/json" }
          }
        );
        showToast("#Toast_ComandResult");
        console.log("Respuesta del servidor:", response.data);
        return response.data;
      } catch (error) {
        console.error(
          "Error en la petición:",
          error.response?.data || error.message
        );
        throw error;
      }
    }

// ------------------- Ejemplo de uso -------------------
// (async () => {
//   try {
//     const data = await sendCommand("DI0021", "1");
//     console.log("Respuesta del servidor:", data);
//   } catch (err) {
//     console.error("Error en el envío:", err);
//   }
// })();

// import axios from "axios";

// class ApiClient {
//     constructor() {
//         const user = 'Difeyro1';
//         const password = '47a545bbced597d7f2666211994c1';
//         // Generar el token en Base64
//         this.token = Buffer.from(`${user}:${password}`).toString("base64");

//         // Crear una instancia de axios con headers comunes
//         this.client = axios.create({
//             baseURL: "https://example.com", // <-- aquí ponga el dominio base de su API
//             headers: {
//                 "Authorization": `Basic ${this.token}`,
//                 "Content-Type": "application/json"
//             }
//         });
//     }

//     // Método para enviar comandos al endpoint
//     async sendCommand(id_unit, cmd) {
        
//         const body = {
//             "idCtm": "551",
//             "idTra": id_unit,
//             "idCmd": cmd,
//             "idUsr": "Jornada Digital",
//             "idTer": "PC10",
//             "idPgm": "Monitoreo JD"
//         };

//         try {
//             const response = await this.client.post("https://ws.mksmexico.com/Positions/SndCmdExt.php", body);
//             return response.data;
//         } catch (error) {
//             console.error("Error en la petición:", error.response?.data || error.message);
//             throw error;
//         }
//     }
// }

// ------------------- Uso de la clase -------------------
// const api = new ApiClient();

// (async () => {
//     try {
//         const data = await api.sendCommand( 'DI0021', '1' );

//         console.log("Respuesta del servidor:", data);
//     } catch (err) {
//         console.error("Error en el envío:", err);
//     }
// })();
