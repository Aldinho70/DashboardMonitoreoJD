export const env = {
    token: "e1749cb44770905014c9e8957aff9e898C84246B54FEB3A6107BB7EA8B52DE7374D4AC2E",

    /* Grupos de la cuenta que queremos ver */
    Grupos: true,
        seccion_grupos_1: { /*El numero recomendado de de grupos son 5 por cada lado */
            '03 CARGAS A SEGUIR': {name: 'A seguir'},
            '05 TANQUES TICSA':{name: 'Tanques'},
            'GOMEZ PALACIO': {name: 'Gomez Palacio'},
            'ABASOLO': {name: 'Abasolo'},
            'MERIDA': {name: 'Merida'},            
        },
        seccion_grupos_2: {
            // '01 UNIDADES VACIAS TFS/TCS': 'Vacias',
            // '02 UNIDADES CARGADAS TFS/TCS': 'Cargadas',
            // 'UNIDADES EN CLIENTE TCS/TFS': 'Con cliente',
            // '04 UNIDADES GRAL AFUERA': 'En transito',
            'CD JUAREZ': { name: 'Juarez'},
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
        'Juarez': ['Movimiento']
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

// Usuario: TICSA/TRAFUSA DESARROLLOS
// Contrasena: Ticfusa-2024