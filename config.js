export const env = {
    token: "e1749cb44770905014c9e8957aff9e8952E1331623A334EC024A9B0DD2274367C12C2743",
    GroupsUnit: 'true',
        gruposInteres1: { /*El numero recomendado de de grupos son 5 por cada lado */
            '03 CARGAS A SEGUIR':'A seguir',
            '05 TANQUES TICSA':'Tanques',
            'GOMEZ PALACIO': 'Gomez Palacio',
            'ABASOLO': 'Abasolo',
            'MERIDA': 'Merida',            
        },
        gruposInteres2: {
            // '01 UNIDADES VACIAS TFS/TCS': 'Vacias',
            // '02 UNIDADES CARGADAS TFS/TCS': 'Cargadas',
            // 'UNIDADES EN CLIENTE TCS/TFS': 'Con cliente',
            // '04 UNIDADES GRAL AFUERA': 'En transito',
            // 'CD JUAREZ': 'Juarez',
        },
        StatusUnit: 'true',
        statusInteres: {
            'VACIO': 'VACIO',
            'CARGADO': 'CARGADO',
            'ESPERA_CARGA': 'CARGA',
            'ESPERA_DESCARGA': 'DESCARGA',
            'SIN_STATUS': 'SIN CARGA',
        }, 
    Name_cajas: '',
    grupoInteres_modules: {},
    Temperature: 'false',
    Estatus: 'false',
    map:'false',
    img: { 
        'VACIO': './src/assets/img/logojd.png',
        'CARGADO': './src/assets/img/logojd.png',
        'CARGA': './src/assets/img/logojd.png',
        'DESCARGA': './src/assets/img/logojd.png',
        'SIN CARGA': './src/assets/img/logojd.png',
     },
    bootstrap: { /* Opcional 'A SEGUIR': './img/ticsa.png',*/ },
    map_module: {
        map : true,
        detail: true,
    }
}

// Usuario: TICSA/TRAFUSA DESARROLLOS
// Contrasena: Ticfusa-2024