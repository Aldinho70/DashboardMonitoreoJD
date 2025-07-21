export const env = {
    token: "9755b3f50b30dd0d20c5088de1987da1E211D85BA3D0726F42986CD9B783F7B5E3EDC513",
    GroupsUnit: 'true',
        gruposInteres1: { /*El numero recomendado de de grupos son 5 por cada lado */
            /* HRH Izquierdo */
                'GRUPO HRH':'HRH GENERAL',
                '01-CARGAS MEXICO':'Mexico',
                '03-POLLO VIVO':'Pollo',
                '04-CONGELADO':'Congelado',
                '05-FRESCO':'Fresco',
                '06-PARA MONITOREO':'Monitoreo',
                'GR-AREA 3':'GR',
            /* -------------------------- */
        },
        gruposInteres2: {
            /* HRH Derecho */
                '02-CARGAS FORANEAS':'Foraneas',
                'HRH CAJAS':'Cajas',
                'HRH SEGURIDAD':'Dobles',
                '08-HRH CAJAS PILGRIMS':'Pilgrims',
                'DIFEYRO MIGRACION MEERKAT':'Dyfeiro',
                '00-DIFEYRO SEGURIDAD':'Dyfeiro_Dobles',
                '00-CAJAS DIFEYRO':'Dyfeiro Cajas',
            /* -------------------------- */
        },
    StatusUnit: 'false',
        statusInteres: {
            'VACIO': 'VACIO',
            'CARGADO': 'CARGADO',
            'ESPERA_CARGA': ' CARGA',
            'ESPERA_DESCARGA': 'DESCARGA',
        }, 
    Name_cajas: 'TK-',
    grupoInteres_modules: {
        'Cajas': ['ralenti','warning' /*'apagadas', 'sin_conexion', 'movimiento'*/],
        'Dobles': ['ralenti', 'apagadas', 'movimiento'],
        'Dyfeiro_Dobles': ['ralenti', 'apagadas', 'movimiento'],
    },
    Temperature: 'false',
    Estatus: 'false',
    map:'false',
    img: { /* Opcional */
        
    },
    bootstrap: /* Opcional */ {
        
    }
    
}

// Usuario: MONITOREO HRH
// Contrase単a: MONITOREO2022