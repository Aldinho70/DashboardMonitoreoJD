export const env = {
    token: "e1749cb44770905014c9e8957aff9e898C84246B54FEB3A6107BB7EA8B52DE7374D4AC2E",

    /* Grupos de la cuenta que queremos ver */
    Grupos: true,
        seccion_grupos_1: { 
            '03 CARGAS A SEGUIR': {name: 'A seguir'},
            '05 TANQUES TICSA':{name: 'Tanques'},
            'GOMEZ PALACIO': {name: 'Gomez Palacio'},
            'ABASOLO': {name: 'Abasolo'},
            'MERIDA': {name: 'Merida'},            
            '07 TICSA': {name: 'Ticsa'},            
            '09 GENERAL TICSA/TRAFUSA': {name: 'General'},        
            '10 IMPERIAL SENSORES': {name: 'Impereal'},        
            'UNIDADES EN CLIENTE TCS/TFS': {name: 'Con cliente'},        

        },
        seccion_grupos_2: {
            '02 UNIDADES CARGADAS TFS/TCS': { name: 'Cargadas'},
            '02 UNIDADES VACIAS TFS/TCS': { name: 'Vacias'},
            'CD JUAREZ': { name: 'Juarez'},
            '08 TRAFUSA': { name: 'Trafusa'},
            'FILSA': { name: 'Filsa'},

        },

    /* Estados de las unidades */
    Estados_de_unidades: true,
        statusInteres: {
            // 'VACIO': {name: 'VACIO'},
            // 'CARGADO': {name: 'CARGADO'},
            'ESPERA_CARGA': {name: 'Espera carga'},
            'ESPERA_DESCARGA': {name: 'Esspera descarga'},
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