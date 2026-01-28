export const env = {
    token: "d26901b3a1b754d30e264a18da1e24e37AC702FCC0735B72987A8FAFDD6E86F43350A5CB",

    /* Grupos de la cuenta que queremos ver */
    Grupos: true,
        seccion_grupos_1: { /*El numero recomendado de de grupos son 5 por cada lado */
            'GUZMAN TRACTOS': {name: 'Tractos'},
            'GUZMAN TRACTOS DOBLES': {name: 'Tractos dobles'},
            'GUZMAN CAJAS': {name: 'Cajas'},
            'GUZMAN CAJAS DOBLES': {name: 'Cajas dobles'},
            'TRACTOS DASHBOARD': {name: 'Tractos dashboard'},
            
        },
        seccion_grupos_2: {
            // 'GUZMAN EN CLIENTE': { name: 'Con cliente'},
            // 'GUZMAN BASE': { name: 'Base'},
            // 'GUZMAN DETENIDAS': { name: 'Detenidos'},
            // 'GUZMAN EN MOVIMIENTO': { name: 'En movimiento'},
            // 'GUZMAN DASHBOARD TRACTOS DOBLES': { name: 'Dobles dashboard'},
            'GUZMAN CAJAS CARGA LALA': { name: 'Cajas lala'},
        },

    /* Estados de las unidades */
    Estados_de_unidades: true,
        statusInteres: {
            'VACIO': {name: 'VACIO'},
            'CARGADO': {name: 'CARGADO'},
            'ESPERA_CARGA': {name: 'CARGA'},
            'ESPERA_DESCARGA': {name: 'DESCARGA'},
            // 'SIN_STATUS': 'SIN CARGA',
        }, 

    Name_cajas: '',

    grupoInteres_modules: {
        // 'HRH CAJAS': ['ralenti','warning' /*'apagadas', 'sin_conexion', 'movimiento'*/],
        // 'DOBLES': ['ralenti', 'apagadas', 'movimiento'],
        // 'DIFEYRO DOBLES': ['ralenti', 'apagadas', 'movimiento'],
    },

    img: { 
        /* 'VACIO': './src/assets/img/logojd.png', 
        ...*/
    },

    map_module: {
        map : true,
        detail: true,
    }
    
}

// Usuario: MONITOREO HRH
// Contrasena: MONITOREO2022