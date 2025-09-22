export const env = {
    token: "9755b3f50b30dd0d20c5088de1987da1D34D362FAE7A9793A0B7DB0B34632CF8B4535790",

    /* Grupos de la cuenta que queremos ver */
    Grupos: true,
        seccion_grupos_1: { /*El numero recomendado de de grupos son 5 por cada lado */
            'GRUPO HRH': {name: 'HRH'},
            '01-CARGAS MEXICO':{name: 'MEXICO'},
            '03-POLLO VIVO': {name: 'POLLO VIVO'},
            '04-CONGELADO': {name: 'CONGELADO'},
            '05-FRESCO': {name: 'FRESCO'},            
            // '06-PARA MONITOREO': {name: 'MONITOREO JD'},            
            '02-CARGAS FORANEAS': { name: 'FORANEAS'},
        },
        seccion_grupos_2: {
            'HRH CAJAS': { name: 'HRH CAJAS'},
            'HRH SEGURIDAD': { name: 'DOBLES'},
            '08-HRH CAJAS PILGRIMS': { name: 'PILGRIMS'},
            'DIFEYRO MIGRACION MEERKAT': { name: 'DIFEYRO'},
            '00-DIFEYRO SEGURIDAD': { name: 'DIFEYRO DOBLES'},
            '00-CAJAS DIFEYRO': { name: 'DIFEYRO CAJAS'},
        },

    /* Estados de las unidades */
    Estados_de_unidades: false,
        statusInteres: {
            'VACIO': {name: 'VACIO'},
            'CARGADO': {name: 'CARGADO'},
            'ESPERA_CARGA': {name: 'CARGA'},
            'ESPERA_DESCARGA': {name: 'DESCARGA'},
            // 'SIN_STATUS': 'SIN CARGA',
        }, 

    Name_cajas: '',

    grupoInteres_modules: {
        'HRH CAJAS': ['ralenti','warning' /*'apagadas', 'sin_conexion', 'movimiento'*/],
        'DOBLES': ['ralenti', 'apagadas', 'movimiento'],
        'DIFEYRO DOBLES': ['ralenti', 'apagadas', 'movimiento'],
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