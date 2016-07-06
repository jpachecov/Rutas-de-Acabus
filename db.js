/**
* Author: Jean Pierre Pacheco Avila (jpachecov)
* Implementacion del algritmo de Dijkstra para rutas mas cortas con un ejemplo
*/


"use strict"

var datos = {
                1:{
                        "Estación":"Terminal de transferencia", "Lat":"16.89334", "Long":"-99.83364", "Icono":"ruta-principal-renacimiento.png","Icono_grande":"ruta-principal-renacimiento_g.png",
                        "Conexiones": [
                                {"id": 2, "costo": 2},
                                {"id": 18, "costo": 1},
                                {"id": 42, "costo": 2},
                                {"id": 11, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT5", "RA1", "RA2", "RA3", "RA4", "RA5"
                        ]
                },
                2:{
                        "Estación":"Zapata", "Lat":"16.89867", "Long":"-99.831", "Icono":"ruta-principal-zapata.png","Icono_grande":"ruta-principal-zapata_g.png",
                        "Conexiones": [
                                {"id": 1, "costo": 2},
                                {"id": 123, "costo": 2},
                                {"id": 12, "costo": 2},
                                {"id": 88, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA1", "RA2", "RA3", "RA4", "RA5"
                        ]
                },
                3:{
                        "Estación":"Flores Magón", "Lat":"16.85985", "Long":"-99.89323", "Icono":"ruta-principal-flores-magon.png","Icono_grande":"ruta-principal-flores-magon_g.png",
                        "Conexiones": [
                                {"id": 4, "costo": 2},
                                {"id": 8, "costo": 2},
                                {"id": 161, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4", "RA10"
                        ]
                },
                4:{
                        "Estación":"Michoacán", "Lat":"16.86116", "Long":"-99.89025", "Icono":"ruta-principal-michoacan.png","Icono_grande":"ruta-principal-michoacan_g.png",
                        "Conexiones": [
                                {"id": 9, "costo": 2},
                                {"id": 3, "costo": 2},
                                {"id": 162, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4", "RA10"
                        ]
                },
                5:{
                        "Estación":"Zócalo | Oviedo", "Lat":"16.8496", "Long":"-99.90846", "Icono":"ruta-principal-zocalo-oviedo.png","Icono_grande":"ruta-principal-zocalo-oviedo_g.png",
                        "Conexiones": [
                                {"id": 6, "costo": 2},
                                {"id": 65, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4"
                        ]
                },
                6:{
                        "Estación":"Melchor Ocampo", "Lat":"16.85272", "Long":"-99.90662", "Icono":"ruta-principal-melchor-ocampo.png","Icono_grande":"ruta-principal-melchor-ocampo_g.png",
                        "Conexiones": [
                                {"id": 7, "costo": 2},
                                {"id": 5, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4"
                        ]
                },
                7:{
                        "Estación":"Seguro Social", "Lat":"16.85617", "Long":"-99.90162", "Icono":"ruta-principal-seguro-social.png","Icono_grande":"ruta-principal-seguro-social_g.png",
                        "Conexiones": [
                                {"id": 8, "costo": 2},
                                {"id": 6, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4"
                        ]
                },
                8:{
                        "Estación":"Cine Río", "Lat":"16.85817", "Long":"-99.89876", "Icono":"ruta-principal-cine-rio.png","Icono_grande":"ruta-principal-cine-rio_g.png",
                        "Conexiones": [
                                {"id": 3, "costo": 2},
                                {"id": 7, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4"
                        ]
                },
                9:{
                        "Estación":"Palacio Municipal", "Lat":"16.86251", "Long":"-99.88731", "Icono":"ruta-principal-palacio-municipal.png","Icono_grande":"ruta-principal-palacio-municipal_g.png",
                        "Conexiones": [
                                {"id": 10, "costo": 2},
                                {"id": 4, "costo": 2},
                                {"id": 24, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RT4"
                        ]
                },
                10:{
                        "Estación":"Las Anclas", "Lat":"16.86414", "Long":"-99.88247", "Icono":"ruta-principal-las-anclas.png","Icono_grande":"ruta-principal-las-anclas_g.png",
                        "Conexiones": [
                                {"id": 14, "costo": 2},
                                {"id": 29, "costo": 2},
                                {"id": 9, "costo": 2},
                                {"id": 24, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RA8"
                        ]
                },
                11:{
                        "Estación":"Jacarandas", "Lat":"16.87059", "Long":"-99.87259", "Icono":"ruta-principal-jacarandas.png","Icono_grande":"ruta-principal-jacarandas_g.png",
                        "Conexiones": [
                                {"id": 18, "costo": 2},
                                {"id": 141, "costo": 2},
                                {"id": 142, "costo": 2},
                                {"id": 15, "costo": 2},
                                {"id": 1, "costo": 2},
                                {"id": 66, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3", "RA7"
                        ]
                },
                12:{
                        "Estación":"La Postal", "Lat":"16.90327", "Long":"-99.82777", "Icono":"ruta-principal-la-postal.png","Icono_grande":"ruta-principal-la-postal_g.png",
                        "Conexiones": [
                                {"id": 2, "costo": 2},
                                {"id": 13, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA2", "RA3", "RA4"
                        ]
                },
                13:{
                        "Estación":"Vacacional", "Lat":"16.9061", "Long":"-99.82594", "Icono":"ruta-principal-vacacional.png","Icono_grande":"ruta-principal-vacacional_g.png",
                        "Conexiones": [
                                {"id": 12, "costo": 2},
                                {"id": 117, "costo": 2},
                                {"id": 52, "costo": 2},
                                {"id": 19, "costo": 2},
                                {"id": 23, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA2", "RA3", "RA4"
                        ]
                },
                14:{
                        "Estación":"Dr. Ignacio Chávez", "Lat":"16.86582", "Long":"-99.87714", "Icono":"ruta-principal-ignacio-chavez.png","Icono_grande":"ruta-principal-ignacio-chavez_g.png",
                        "Conexiones": [
                                {"id": 15, "costo": 2},
                                {"id": 10, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3"
                        ]
                },
                15:{
                        "Estación":"Encino", "Lat":"16.86732", "Long":"-99.8736", "Icono":"ruta-principal-encino.png","Icono_grande":"ruta-principal-encino_g.png",
                        "Conexiones": [
                                {"id": 14, "costo": 2},
                                {"id": 11, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RT2", "RT3"
                        ]
                },
                16:{
                        "Estación":"La Diana", "Lat":"16.85913", "Long":"-99.87209", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 31, "costo": 2},
                                {"id": 87, "costo": 2},
                                {"id": 30, "costo": 2},
                                {"id": 43, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5", "RA8"
                        ]
                },
                17:{
                        "Estación":"Almirante C. C.", "Lat":"16.84939", "Long":"-99.85197", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 153, "costo": 2},
                                {"id": 38, "costo": 2},
                                {"id": 39, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5", "RA9"
                        ]
                },
                 18:{
                        "Estación":"Av. de Las Cruces", "Lat":"16.87802", "Long":"-99.85769", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 1, "costo": 2},
                                {"id": 138, "costo": 2},
                                {"id": 11, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1", "RA6"
                        ]
                },
                19:{
                        "Estación":"Central de abastos", "Lat":"16.91005", "Long":"-99.82497", "Icono":"ruta-principal-central-de-abastos.png","Icono_grande":"ruta-principal-central-de-abastos_g.png",
                        "Conexiones": [
                                {"id": 23, "costo": 2},
                                {"id": 20, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA3"
                        ]
                },
                20:{
                        "Estación":"Leyes de Reforma", "Lat":"16.91375", "Long":"-99.82456", "Icono":"ruta-principal-leyes-de-reforma.png","Icono_grande":"ruta-principal-leyes-de-reforma_g.png",
                        "Conexiones": [
                                {"id": 19, "costo": 2},
                                {"id": 21, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA3"
                        ]
                },
                21:{
                        "Estación":"Retorno", "Lat":"16.91603", "Long":"-99.82037", "Icono":"ruta-principal-retorno.png","Icono_grande":"ruta-principal-retorno_g.png",
                        "Conexiones": [
                                {"id": 20, "costo": 2},
                                {"id": 22, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA3"
                        ]
                },
                22:{
                        "Estación":"La Venta", "Lat":"16.91153", "Long":"-99.82084", "Icono":"ruta-principal-la-venta.png","Icono_grande":"ruta-principal-la-venta_g.png",
                        "Conexiones": [
                                {"id": 21, "costo": 2},
                                {"id": 23, "costo": 2},
                                {"id": 108, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA3"
                        ]
                },
                23:{
                        "Estación":"Paso Limonero", "Lat":"16.90903", "Long":"-99.8243", "Icono":"ruta-principal-el-limonero.png","Icono_grande":"ruta-principal-el-limonero_g.png",
                        "Conexiones": [
                                {"id": 22, "costo": 2},
                                {"id": 19, "costo": 2},
                                {"id": 13, "costo": 2},
                        ],
                        "Rutas": [
                        "RT2", "RA3"
                        ]
                },
                24:{
                        "Estación":"G. de Sandoval", "Lat":"16.86098", "Long":"-99.88119", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 9, "costo": 2},
                                {"id": 85, "costo": 2},
                                {"id": 10, "costo": 2},
                                {"id": 29, "costo": 2},
                        ],
                        "Rutas":[
                        "RT4", "RA8" 
                        ]
                },
                25:{
                        "Estación":"La Nao", "Lat":"16.86376", "Long":"-99.87757", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 29, "costo": 2},
                                {"id": 26, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                26:{
                        "Estación":"Norte", "Lat":"16.86329", "Long":"-99.87387", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 25, "costo": 2},
                                {"id": 27, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                27:{
                        "Estación":"Y. Yáñez Pinzón", "Lat":"16.86251", "Long":"-99.87177", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 26, "costo": 2},
                                {"id": 28, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                28:{
                        "Estación":"Navegante Juan Pérez", "Lat":"16.86226", "Long":"-99.87079", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 27, "costo": 2},
                                {"id": 86, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                29:{
                        "Estación":"Av. Universidad 2", "Lat":"16.8649", "Long":"-99.8794", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 85, "costo": 2},
                                {"id": 25, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                30:{
                        "Estación":"Av. Bella Vista", "Lat":"16.86047", "Long":"-99.87153", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 29, "costo": 2},
                                {"id": 16, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                31:{
                        "Estación":"El Morro", "Lat":"16.85793", "Long":"-99.86964", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 16, "costo": 2},
                                {"id": 31, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                32:{
                        "Estación":"Playa Condesa", "Lat":"16.85689", "Long":"-99.86701", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 31, "costo": 2},
                                {"id": 33, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                33:{
                        "Estación":"Torres Gemelas", "Lat":"16.85658", "Long":"-99.86482", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 32, "costo": 2},
                                {"id": 34, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                34:{
                        "Estación":"Delprado", "Lat":"16.85632", "Long":"-99.86221", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 33, "costo": 2},
                                {"id": 35, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                35:{
                        "Estación":"Deportes", "Lat":"16.8555", "Long":"-99.85984", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 34, "costo": 2},
                                {"id": 36, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                36:{
                        "Estación":"Palmas", "Lat":"16.85463", "Long":"-99.8578", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 35, "costo": 2},
                                {"id": 37, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                37:{
                        "Estación":"Almendro", "Lat":"16.85334", "Long":"-99.85497", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 36, "costo": 2},
                                {"id": 38, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                38:{
                        "Estación":"Nao Victoria", "Lat":"16.85152", "Long":"-99.85307", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 37, "costo": 2},
                                {"id": 17, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                39:{
                        "Estación":"Fragata María", "Lat":"16.84721", "Long":"-99.8499", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 17, "costo": 2},
                                {"id": 40, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                40:{
                        "Estación":"Fragata Zaragoza", "Lat":"16.84419", "Long":"-99.84895", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 39, "costo": 2},
                                {"id": 41, "costo": 2},
                                
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                41:{
                        "Estación":"La Ceiba", "Lat":"16.84217", "Long":"-99.84903", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 40, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RT5"
                        ]
                },
                42:{
                        "Estación":"Amates", "Lat":"16.864", "Long":"-99.86919", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 43, "costo": 2},
                                {"id": 1, "costo": 2},
                                {"id": 144, "costo": 2},
                        ],
                        "Rutas": [
                        "RA8", "RT5"
                        ]
                },
                43:{
                        "Estación":"Arroyo", "Lat":"16.86302", "Long":"-99.86916", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 42, "costo": 2},
                                {"id": 16, "costo": 2},
                                {"id": 87, "costo": 2},
                        ],
                        "Rutas": [
                        "RA8", "RT5"
                        ]
                },
                44:{
                        "Estación":"2 de Abril", "Lat":"16.87083", "Long":"-99.85931", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 45, "costo": 2},
                        ],
                        "Rutas": [
                        "RA7", "RA8"
                        ]
                },
                45:{
                        "Estación":"Av. Cumbres", "Lat":"16.86836", "Long":"-99.85965", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 44, "costo": 2},
                                {"id": 46, "costo": 2},
                        ],
                        "Rutas": [
                        "RA7", "RA8"
                        ]
                },
                46:{
                        "Estación":"Jorullo", "Lat":"16.86898", "Long":"-99.86254", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 45, "costo": 2},
                                {"id": 47, "costo": 2},
                        ],
                        "Rutas": [
                        "RA7", "RA8"
                        ]
                },
                47:{
                        "Estación":"Popocatépetl", "Lat":"16.86927", "Long":"-99.86344", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 46, "costo": 2},
                                {"id": 48, "costo": 2},
                        ],
                        "Rutas": [
                        "RA7", "RA8"
                        ]
                },
                48:{
                        "Estación":"Av. del Colegio", "Lat":"16.86762", "Long":"-99.86518", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 47, "costo": 2},
                                {"id": 143, "costo": 2},
                                {"id": 139, "costo": 2},
                        ],
                        "Rutas": [
                        "RA7", "RA8"
                        ]
                },
                49:{
                        "Estación":"Av. Tanque", "Lat":"16.87156", "Long":"-99.8888", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 50, "costo": 2},
                        ],
                        "Rutas": [
                        "RA10", "RA11"
                        ]
                },
                50:{
                        "Estación":"Condominio D", "Lat":"16.87221", "Long":"-99.89163", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 49, "costo": 2},
                                {"id": 51, "costo": 2},
                        ],
                        "Rutas": [
                        "RA10", "RA11"
                        ]
                },
                51:{
                        "Estación":"Tuxpan", "Lat":"16.87206", "Long":"-99.892", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 50, "costo": 2},
                                {"id": 52, "costo": 2},
                        ],
                        "Rutas": [
                        "RA10", "RA11"
                        ]
                },
                52:{
                        "Estación":"Nautla", "Lat":"16.8713", "Long":"-99.89338", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 51, "costo": 2},
                                {"id": 53, "costo": 2},
                        ],
                        "Rutas": [
                        "RA10", "RA11"
                        ]
                },
                53:{
                        "Estación":"Tampico", "Lat":"16.86995", "Long":"-99.89599", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 52, "costo": 2},
                                {"id": 54, "costo": 2},
                        ],
                        "Rutas": [
                        "RA10", "RA11"
                        ]
                },
                54:{
                        "Estación":"Río Coyuca", "Lat":"16.86938", "Long":"-99.89702", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 53, "costo": 2},
                                {"id": 152, "costo": 2},
                                {"id": 161, "costo": 2},
                        ],
                        "Rutas": [
                        "RA10", "RA11"
                        ]
                },
                55:{
                        "Estación":"Playa Caleta", "Lat":"16.83149", "Long":"-99.90562", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 56, "costo": 1},
                                {"id": 58, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                56:{
                        "Estación":"Playa Caletilla", "Lat":"16.83092", "Long":"-99.90718", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 55, "costo": 1},
                                {"id": 57, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                57:{
                        "Estación":"Plaza de Toros", "Lat":"16.83162", "Long":"-99.90772", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 55, "costo": 1},
                                {"id": 57, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                58:{
                        "Estación":"San Martín", "Lat":"16.83243", "Long":"-99.90378", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 55, "costo": 1},
                                {"id": 59, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                59:{
                        "Estación":"Tambuco", "Lat":"16.83474", "Long":"-99.9044", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 60, "costo": 1},
                                {"id": 58, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                60:{
                        "Estación":"La Suiza", "Lat":"16.83765", "Long":"-99.90861", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 61, "costo": 1},
                                {"id": 59, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                61:{
                        "Estación":"Los Cabos", "Lat":"16.83883", "Long":"-99.90948", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 62, "costo": 1},
                                {"id": 60, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                62:{
                        "Estación":"Playa Langosta", "Lat":"16.84", "Long":"-99.91035", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 63, "costo": 1},
                                {"id": 61, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                63:{
                        "Estación":"Playa Manzanillo", "Lat":"16.84049", "Long":"-99.91256", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 64, "costo": 1},
                                {"id": 62, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                64:{
                        "Estación":"Paseo del Pescador", "Lat":"16.84304", "Long":"-99.91224", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 65, "costo": 1},
                                {"id": 63, "costo": 1},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                65:{
                        "Estación":"Colima", "Lat":"16.84734", "Long":"-99.90814", "Icono":"ruta-troncal-1-paradas.png","Icono_grande":"ruta-troncal-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 64, "costo": 1},
                                {"id": 5, "costo": 2},
                        ],
                        "Rutas": [
                        "RT1"
                        ]
                },
                66:{
                        "Estación":"Libertad", "Lat":"16.88564", "Long":"-99.83599", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 11, "costo": 2},
                                {"id": 67, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                67:{
                        "Estación":"Bod. Costa Chica", "Lat":"16.88473", "Long":"-99.82869", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 66, "costo": 1},
                                {"id": 68, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                68:{
                        "Estación":"RT3 estación 17", "Lat":"16.88363", "Long":"-99.8264", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 67, "costo": 1},
                                {"id": 69, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                69:{
                        "Estación":"Cura", "Lat":"16.88195", "Long":"-99.82225", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 68, "costo": 1},
                                {"id": 70, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                70:{
                        "Estación":"Clínica", "Lat":"16.88021", "Long":"-99.82014", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 69, "costo": 1},
                                {"id": 71, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                71:{
                        "Estación":"El Rastro", "Lat":"16.87868", "Long":"-99.81918", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 70, "costo": 1},
                                {"id": 72, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                72:{
                        "Estación":"5 de Mayo", "Lat":"16.8763", "Long":"-99.81804", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 71, "costo": 1},
                                {"id": 73, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                73:{
                        "Estación":"La Máquina", "Lat":"16.8742", "Long":"-99.81701", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 72, "costo": 1},
                                {"id": 74, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                74:{
                        "Estación":"Planta Capama", "Lat":"16.87159", "Long":"-99.81389", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 73, "costo": 1},
                                {"id": 75, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                75:{
                        "Estación":"RT3 estación 10", "Lat":"16.86917", "Long":"-99.81162", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 74, "costo": 1},
                                {"id": 76, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                76:{
                        "Estación":"Crucero Cayaco", "Lat":"16.86342", "Long":"-99.80946", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 75, "costo": 1},
                                {"id": 77, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                77:{
                        "Estación":"Tecnológico", "Lat":"16.85974", "Long":"-99.81064", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 76, "costo": 1},
                                {"id": 78, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                78:{
                        "Estación":"Iglesia", "Lat":"16.85148", "Long":"-99.81122", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 77, "costo": 1},
                                {"id": 79, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                79:{
                        "Estación":"Piedra Roja", "Lat":"16.84764", "Long":"-99.81144", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 78, "costo": 1},
                                {"id": 80, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                80:{
                        "Estación":"Albañil", "Lat":"16.84715", "Long":"-99.81452", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 79, "costo": 1},
                                {"id": 81, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                81:{
                        "Estación":"RT3 estación 4", "Lat":"16.8495", "Long":"-99.81588", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 80, "costo": 1},
                                {"id": 82, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                82:{
                        "Estación":"Peña Blanca", "Lat":"16.85128", "Long":"-99.81696", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 81, "costo": 1},
                                {"id": 83, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                83:{
                        "Estación":"Av. Paseo Europeo", "Lat":"16.85289", "Long":"-99.81827", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 82, "costo": 1},
                                {"id": 84, "costo": 1},
                        ],
                        "Rutas": [
                        "RT3"]
                },
                84:{
                        "Estación":"Sec. 100", "Lat":"16.85708", "Long":"-99.81876", "Icono":"ruta-troncal-3-paradas.png","Icono_grande":"ruta-troncal-3-paradas_g.png", 
                        "Conexiones": [
                                {"id": 83, "costo": 1}
                        ],
                        "Rutas": [
                        "RT3"]
                },
                85:{
                        "Estación":"Mercado de Artesanías", "Lat":"16.86151", "Long":"-99.87803", "Icono":"ruta-troncal-4-paradas.png","Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 24, "costo": 2},
                                {"id": 29, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4"
                        ]
                },
                86:{
                        "Estación":"Av. Universidad 1", "Lat":"16.86059", "Long":"-99.87482", "Icono":"ruta-troncal-4-paradas.png", "Icono_grande":"ruta-troncal-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 30, "costo": 2},
                                {"id": 28, "costo": 2},
                        ],
                        "Rutas": [
                        "RT4", "RA8"
                        ]
                },
                87:{
                        "Estación":"Comercial M.", "Lat":"16.86192", "Long":"-99.86926", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 16, "costo": 2},
                                {"id": 43, "costo": 2},
                        ],
                        "Rutas": [
                        "RA8"
                        ]
                },
                88:{
                        "Estación":"Ejido Las Pozas", "Lat":"16.89757", "Long":"-99.83021", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 2, "costo": 2},
                                {"id": 89, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                89:{
                        "Estación":"Nicolás Bravo", "Lat":"16.89599", "Long":"-99.82756", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 88, "costo": 1},
                                {"id": 90, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                90:{
                        "Estación":"Eduardo Neri", "Lat":"16.89418", "Long":"-99.82454", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 89, "costo": 1},
                                {"id": 91, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                91:{
                        "Estación":"Alta Cuauhtémoc", "Lat":"16.89523", "Long":"-99.82113", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 90, "costo": 1},
                                {"id": 92, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                92:{
                        "Estación":"Jesús Salgado", "Lat":"16.89752", "Long":"-99.81969", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 91, "costo": 1},
                                {"id": 93, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                93:{
                        "Estación":"Julián Blanco", "Lat":"16.89834", "Long":"-99.81745", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 92, "costo": 1},
                                {"id": 94, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                94:{
                        "Estación":"Icacos", "Lat":"16.89768", "Long":"-99.81715", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 93, "costo": 1},
                                {"id": 95, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                95:{
                        "Estación":"Canal del Arroyo", "Lat":"16.89574", "Long":"-99.81748", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 94, "costo": 1},
                                {"id": 96, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                96:{
                        "Estación":"Cuauhtémoc", "Lat":"16.89377", "Long":"-99.81874", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 95, "costo": 1},
                                {"id": 97, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                97:{
                        "Estación":"José María Izazaga", "Lat":"16.891", "Long":"-99.82053", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 96, "costo": 1},
                                {"id": 98, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                98:{
                        "Estación":"Eje Vicente Guerrero", "Lat":"16.88938", "Long":"-99.82155", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 97, "costo": 1},
                                {"id": 99, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                99:{
                        "Estación":"Río Atoyac", "Lat":"16.88727", "Long":"-99.82187", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 98, "costo": 1},
                                {"id": 100, "costo": 1}
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                100:{
                        "Estación":"Palma Sola", "Lat":"16.88619", "Long":"-99.82397", "Icono":"ruta-alimentadora-1-paradas.png", "Icono_grande":"ruta-alimentadora-1-paradas_g.png",
                        "Conexiones": [
                                {"id": 99, "costo": 1},
                        ],
                        "Rutas": [
                        "RA1"
                        ]
                },
                101:{
                        "Estación":"Nautla", "Lat":"16.90592", "Long":"-99.82559", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 13, "costo": 2},
                                {"id": 102, "costo": 1}
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                102:{
                        "Estación":"Tlapehuala", "Lat":"16.90454", "Long":"-99.82333", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 101, "costo": 1},
                                {"id": 103, "costo": 1}
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                103:{
                        "Estación":"Atlixtac", "Lat":"16.9031", "Long":"-99.82106", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 102, "costo": 1},
                                {"id": 104, "costo": 1}
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                104:{
                        "Estación":"Orizaba", "Lat":"16.90206", "Long":"-99.81928", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 103, "costo": 1},
                                {"id": 105, "costo": 1}
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                105:{
                        "Estación":"Av. de la Ceiba", "Lat":"16.90094", "Long":"-99.81741", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 104, "costo": 1},
                                {"id": 106, "costo": 1}
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                106:{
                        "Estación":"And. Circuito", "Lat":"16.90004", "Long":"-99.81595", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 105, "costo": 1},
                                {"id": 107, "costo": 1}
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                107:{
                        "Estación":"Av. del Capire", "Lat":"16.89765", "Long":"-99.81189", "Icono":"ruta-alimentadora-2-paradas.png","Icono_grande":"ruta-alimentadora-2-paradas_g.png",
                        "Conexiones": [
                                {"id": 106, "costo": 1},
                        ],
                        "Rutas": [
                        "RA2"
                        ]
                },
                108:{
                        "Estación":"10 de Mayo", "Lat":"16.91129", "Long":"-99.81999", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 22, "costo": 2},
                                {"id": 109, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                109:{
                        "Estación":"And. Bugambilias", "Lat":"16.91053", "Long":"-99.81733", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 108, "costo": 1},
                                {"id": 110, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                110:{
                        "Estación":"Chico Portillo", "Lat":"16.90981", "Long":"-99.8151", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 109, "costo": 1},
                                {"id": 111, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                111:{
                        "Estación":"Cion. Tres Tamarindos", "Lat":"16.90937", "Long":"-99.81247", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 110, "costo": 1},
                                {"id": 112, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                112:{
                        "Estación":"Av. del Tanque", "Lat":"16.90885", "Long":"-99.80833", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 111, "costo": 1},
                                {"id": 113, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                113:{
                        "Estación":"Fco. I. Madero", "Lat":"16.90881", "Long":"-99.8062", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 112, "costo": 1},
                                {"id": 114, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                114:{
                        "Estación":"Zócalo", "Lat":"16.90897", "Long":"-99.80452", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 113, "costo": 1},
                                {"id": 115, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                115:{
                        "Estación":"Ventura Escobar", "Lat":"16.90994", "Long":"-99.8021", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 114, "costo": 1},
                                {"id": 116, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                116:{
                        "Estación":"Santo Tomás", "Lat":"16.9115", "Long":"-99.80156", "Icono":"ruta-alimentadora-3-paradas.png","Icono_grande":"ruta-alimentadora-3-paradas_g.png",
                        "Conexiones": [
                                {"id": 115, "costo": 1},
                        ],
                        "Rutas": [
                        "RA3"
                        ]
                },
                117:{
                        "Estación":"Olivos", "Lat":"16.90715", "Long":"-99.8267", "Icono":"ruta-alimentadora-4-paradas.png","Icono_grande":"ruta-alimentadora-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 13, "costo": 2},
                                {"id": 118, "costo": 1},
                        ],
                        "Rutas": [
                        "RA4"
                        ]
                },
                118:{
                        "Estación":"Calle 10", "Lat":"16.90889", "Long":"-99.82956", "Icono":"ruta-alimentadora-4-paradas.png","Icono_grande":"ruta-alimentadora-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 117, "costo": 1},
                                {"id": 119, "costo": 1},
                        ],
                        "Rutas": [
                        "RA4"
                        ]
                },
                119:{
                        "Estación":"Calle 15", "Lat":"16.90963", "Long":"-99.83091", "Icono":"ruta-alimentadora-4-paradas.png","Icono_grande":"ruta-alimentadora-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 118, "costo": 1},
                                {"id": 120, "costo": 1},
                        ],
                        "Rutas": [
                        "RA4"
                        ]
                },
                120:{
                        "Estación":"And. Fabrica", "Lat":"16.91115", "Long":"-99.83342", "Icono":"ruta-alimentadora-4-paradas.png","Icono_grande":"ruta-alimentadora-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 119, "costo": 1},
                                {"id": 121, "costo": 1},
                        ],
                        "Rutas": [
                        "RA4"
                        ]
                },
                121:{
                        "Estación":"Clavel", "Lat":"16.91207", "Long":"-99.83499", "Icono":"ruta-alimentadora-4-paradas.png","Icono_grande":"ruta-alimentadora-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 120, "costo": 1},
                                {"id": 122, "costo": 1},
                        ],
                        "Rutas": [
                        "RA4"
                        ]
                },
                122:{
                        "Estación":"Tulipanes", "Lat":"16.91398", "Long":"-99.83823", "Icono":"ruta-alimentadora-4-paradas.png","Icono_grande":"ruta-alimentadora-4-paradas_g.png",
                        "Conexiones": [
                                {"id": 121, "costo": 1},
                        ],
                        "Rutas": [
                        "RA4"
                        ]
                },
                132:{
                        "Estación":"Cocula", "Lat":"16.90314", "Long":"-99.84991", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 131, "costo": 1},
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                131:{
                        "Estación":"Simón Bolivar", "Lat":"16.90432", "Long":"-99.84768", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 130, "costo": 1},
                                {"id": 132, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                130:{
                        "Estación":"Calle 14", "Lat":"16.90525", "Long":"-99.84587", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 129, "costo": 1},
                                {"id": 131, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                129:{
                        "Estación":"Calle 10", "Lat":"16.90592", "Long":"-99.84461", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 128, "costo": 1},
                                {"id": 130, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                128:{
                        "Estación":"Calle 27", "Lat":"16.90531", "Long":"-99.84212", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 127, "costo": 1},
                                {"id": 129, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                127:{
                        "Estación":"Calle 23", "Lat":"16.9041", "Long":"-99.84014", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 126, "costo": 1},
                                {"id": 128, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                126:{
                        "Estación":"Calle 17", "Lat":"16.90279", "Long":"-99.838", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 125, "costo": 1},
                                {"id": 127, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                125:{
                        "Estación":"Calle 11", "Lat":"16.9014", "Long":"-99.83569", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 124, "costo": 1},
                                {"id": 126, "costo": 1}
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                124:{
                        "Estación":"Calle 7", "Lat":"16.90031", "Long":"-99.83389", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 123, "costo": 1},
                                {"id": 125, "costo": 1},
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                123:{
                        "Estación":"Calle 3", "Lat":"16.89902", "Long":"-99.83174", "Icono":"ruta-alimentadora-5-paradas.png","Icono_grande":"ruta-alimentadora-5-paradas_g.png",
                        "Conexiones": [
                                {"id": 2, "costo": 2},
                                {"id": 124, "costo": 1},
                        ],
                        "Rutas": [
                        "RA5"
                        ]
                },
                133:{
                        "Estación":'Módulo de Policía "Y"', "Lat":"16.87731", "Long":"-99.86016", "Icono":"ruta-alimentadora-6-paradas.png","Icono_grande":"ruta-alimentadora-6-paradas_g.png",
                        "Conexiones": [
                                {"id": 134, "costo": 1},
                        ],
                        "Rutas": [
                        "RA6"
                        ]
                },
                134:{
                        "Estación":"Vicente Guerrero", "Lat":"16.88432", "Long":"-99.85386", "Icono":"ruta-alimentadora-6-paradas.png","Icono_grande":"ruta-alimentadora-6-paradas_g.png",
                        "Conexiones": [
                                {"id": 133, "costo": 1},
                                {"id": 135, "costo": 1},
                        ],
                        "Rutas": [
                        "RA6"
                        ]
                },
                135:{
                        "Estación":"Simón Bolivar", "Lat":"16.88357", "Long":"-99.85561", "Icono":"ruta-alimentadora-6-paradas.png","Icono_grande":"ruta-alimentadora-6-paradas_g.png",
                        "Conexiones": [
                                {"id": 134, "costo": 1},
                                {"id": 136, "costo": 1},
                        ],
                        "Rutas": [
                        "RA6"
                        ]
                },
                136:{
                        "Estación":"Venustiano Carranza", "Lat":"16.88303", "Long":"-99.85701", "Icono":"ruta-alimentadora-6-paradas.png","Icono_grande":"ruta-alimentadora-6-paradas_g.png",
                        "Conexiones": [
                                {"id": 135, "costo": 1},
                                {"id": 137, "costo": 1},
                        ],
                        "Rutas": [
                        "RA6"
                        ]
                },
                137:{
                        "Estación":"Francisco Márquez", "Lat":"16.88144", "Long":"-99.85702", "Icono":"ruta-alimentadora-6-paradas.png","Icono_grande":"ruta-alimentadora-6-paradas_g.png",
                        "Conexiones": [
                                {"id": 136, "costo": 1},
                                {"id": 138, "costo": 1},
                        ],
                        "Rutas": [
                        "RA6"
                        ]
                },
                138:{
                        "Estación":"San Patricio", "Lat":"16.88034", "Long":"-99.85628", "Icono":"ruta-alimentadora-6-paradas.png","Icono_grande":"ruta-alimentadora-6-paradas_g.png",
                        "Conexiones": [
                                {"id": 137, "costo": 1},
                                {"id": 18, "costo": 2},
                        ],
                        "Rutas": [
                        "RA6"
                        ]
                },
                139:{
                        "Estación":"Las Conchas", "Lat":"16.86868", "Long":"-99.86939", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 140, "costo": 1},
                                {"id": 48, "costo": 1},
                        ],
                        "Rutas": [
                        "RA7"
                        ]
                },
                140:{
                        "Estación":"Glorieta", "Lat":"16.87043", "Long":"-99.86941", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 141, "costo": 1},
                                {"id": 139, "costo": 1},
                        ],
                        "Rutas": [
                        "RA7"
                        ]
                },
                141:{
                        "Estación":"M. Heredia", "Lat":"16.87261", "Long":"-99.86916", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 140, "costo": 1},
                                {"id": 11, "costo": 2},
                        ],
                        "Rutas": [
                        "RA7"
                        ]
                },
                142:{
                        "Estación":"Bugambilias", "Lat":"16.87483", "Long":"-99.86835", "Icono":"ruta-alimentadora-7-paradas.png","Icono_grande":"ruta-alimentadora-7-paradas_g.png",
                        "Conexiones": [
                                {"id": 11, "costo": 1},
                        ],
                        "Rutas": [
                        "RA7"
                        ]
                },
                 143:{
                        "Estación":"Alejandro Cervantes", "Lat":"16.86544", "Long":"-99.86258", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png",
                        "Conexiones": [
                                {"id": 48, "costo": 2},
                                {"id": 144, "costo": 1},
                        ],
                        "Rutas": [
                        "RA8"
                        ]
                },
                144:{
                        "Estación":"Dragos", "Lat":"16.86463", "Long":"-99.86564", "Icono":"ruta-alimentadora-8-paradas.png","Icono_grande":"ruta-alimentadora-8-paradas_g.png", "Ruta":"RA8",
                        "Conexiones": [
                                {"id": 143, "costo": 1},
                                {"id": 42, "costo": 2},
                        ],
                        "Rutas": [
                        "RA8"
                        ]
                },
                151:{
                        "Estación":"Cristobal Colón", "Lat":"16.84995", "Long":"-99.85118", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 150, "costo": 1},
                                {"id": 17, "costo": 2},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                150:{
                        "Estación":"Av. Horacio Nelson", "Lat":"16.85165", "Long":"-99.84818", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 149, "costo": 1},
                                {"id": 151, "costo": 1},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                149:{
                        "Estación":"Fernando Magallanes", "Lat":"16.85184", "Long":"-99.84859", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 148, "costo": 1},
                                {"id": 150, "costo": 1},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                148:{
                        "Estación":"Castillo Bretón", "Lat":"16.85333", "Long":"-99.8456", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 147, "costo": 1},
                                {"id": 149, "costo": 1},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                147:{
                        "Estación":"Niños Héroes de Veracruz", "Lat":"16.85444", "Long":"-99.84447", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 146, "costo": 1},
                                {"id": 148, "costo": 1},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                146:{
                        "Estación":"Juan de Dios Bonilla", "Lat":"16.85756", "Long":"-99.84397", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 145, "costo": 1},
                                {"id": 147, "costo": 1},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                145:{
                        "Estación":"Monte Everest", "Lat":"16.86012", "Long":"-99.84445", "Icono":"ruta-alimentadora-9-paradas.png", "Icono_grande":"ruta-alimentadora-9-paradas_g.png",
                        "Conexiones": [
                                {"id": 146, "costo": 1},
                        ],
                        "Rutas": [
                        "RA9"
                        ]
                },
                152:{
                        "Estación":"Tepic", "Lat":"16.86817", "Long":"-99.8963", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 54, "costo": 2},
                                {"id": 153, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                153:{
                        "Estación":"Nogales", "Lat":"16.867463", "Long":"-99.895923", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 152, "costo": 1},
                                {"id": 154, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                154:{
                        "Estación":"Querétaro", "Lat":"16.86666", "Long":"-99.89491", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 153, "costo": 1},
                                {"id": 155, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                155:{
                        "Estación":"Durango", "Lat":"16.86577", "Long":"-99.8941", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 154, "costo": 1},
                                {"id": 156, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                156:{
                        "Estación":"Zacatecas", "Lat":"16.8654", "Long":"-99.89389", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 155, "costo": 1},
                                {"id": 157, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                157:{
                        "Estación":"Tamaulipas", "Lat":"16.86458", "Long":"-99.89345", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 156, "costo": 1},
                                {"id": 158, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                158:{
                        "Estación":"Torreón", "Lat":"16.86304", "Long":"-99.89294", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 157, "costo": 1},
                                {"id": 159, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                159:{
                        "Estación":"Av. Sonora", "Lat":"16.86181", "Long":"-99.89371", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 158, "costo": 1},
                                {"id": 160, "costo": 1},
                        ],
                        "Rutas":["RA10"],
                },
                160:{
                        "Estación":"Chihuahua", "Lat":"16.8632", "Long":"-99.89095", "Icono":"ruta-alimentadora-10-paradas.png","Icono_grande":"ruta-alimentadora-10-paradas_g.png",
                        "Conexiones": [
                                {"id": 159, "costo": 1},
                                {"id": 4, "costo": 2},
                        ],
                        "Rutas":["RA10"],
                },
                161:{
                        "Estación":"B. D. del Castillo", "Lat":"16.86878", "Long":"-99.89822", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 54, "costo": 2},
                                {"id": 162, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                162:{
                        "Estación":"Baja California", "Lat":"16.86658", "Long":"-99.89923", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 161, "costo": 1},
                                {"id": 163, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                163:{
                        "Estación":"Querétaro", "Lat":"16.86508", "Long":"-99.89874", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 162, "costo": 1},
                                {"id": 164, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                164:{
                        "Estación":"Chiapas", "Lat":"16.86457", "Long":"-99.89856", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 163, "costo": 1},
                                {"id": 165, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                165:{
                        "Estación":"Oaxaca", "Lat":"16.86353", "Long":"-99.89822", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 164, "costo": 1},
                                {"id": 166, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                167:{
                        "Estación":"Jalapa", "Lat":"16.86236", "Long":"-99.89958", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 166, "costo": 1},
                                {"id": 168, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                168:{
                        "Estación":"Nuevo León", "Lat":"16.86099", "Long":"-99.90131", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 167, "costo": 1},
                                {"id": 169, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                169:{
                        "Estación":"Cda. de Vallarta", "Lat":"16.85771", "Long":"-99.90027", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 168, "costo": 1},
                                {"id": 170, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                172:{
                        "Estación":"Miguel Acuña", "Lat":"16.85853", "Long":"-99.89942", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 171, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                171:{
                        "Estación":"Av. Sonora", "Lat":"16.86002", "Long":"-99.89991", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 170, "costo": 1},
                                {"id": 172, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                170:{
                        "Estación":"Coahuila", "Lat":"16.86092", "Long":"-99.90019", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 169, "costo": 1},
                                {"id": 171, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
                166:{
                        "Estación":"Colima", "Lat":"16.86294", "Long":"-99.89842", "Icono":"ruta-alimentadora-11-paradas.png","Icono_grande":"ruta-alimentadora-11-paradas_g.png",
                        "Conexiones": [
                                {"id": 165, "costo": 1},
                                {"id": 167, "costo": 1},
                        ],
                        "Rutas": [
                        "RA11"
                        ]
                },
}



// Necesarias para construir los objets como los necesito.		
var estaciones = datos;
var listas_adyacencias = {};


/* 

Tenemos que construir una lista de adyacencias para cada estaciuon

*/

for(var id = 1; id < 284; id++){
	var estacion = estaciones[id]
	
	if(estacion != undefined){
		estacion['Conexiones'].forEach(
			function(e){
				var lista = listas_adyacencias[id];

				// La lista de adyacencias ya existe
				if(lista != undefined){
					lista.push(e);
				} else {
					listas_adyacencias[id] = [e];
				}
			}
		);
	}
}
/*

En este momento si la lista de estaciones adyacentes de una estacion x es:

listas_adyacencias[x]

*/



/**
* Para Dijkstra necesito un nodo
* para guardar si un nodo ya fue visitado 
* y su distancia y su padre en el recorrido.
*/

class nodo_D{
	constructor(id, data){
		this.id = id;
		this.data = data;
		this.isVisited = false;
		this.distance = undefined;
		this.father = undefined;
	}

}

/*
* Aristas No dirigida de A a B con peso w, (A,B)
*/
class Edge{
	constructor(A, B, W){
		this.a = A;
		this.b = B;
		this.w = W;
	}

	getExtremo(nodo){
		if(nodo.id == this.a.id){
			return this.b;
		}
		if(nodo.id == this.b.id){
			return this.a;
		}
	}
}


/**
* Una grafica G = (V,E) la representamos como una lista de vertices y una lista de listas de adyancencias,
*/
class Grafica{

	/**
	* Constructor 
	* La lista de adyacencias es una estructura Tipo EdgeList
	*/

	constructor(listaNodos, EdgeList){
		this.V = listaNodos;
		this.EdgeList = EdgeList;
	}

	/**
	* Obtiene el vértice de esta grafica cuyo identi
	* ficador es id.
	*/
	getVertex(id){
		var elem;
		for(i = 0; i < this.V.length; i++){
			if(this.V[i].id == id){
				elem = this.V[i];
			}	
		}
		return elem;
	}

	/**
	* Regresa la lista de aristas adyacentes al nodo (objetos tipo Edge)
	*/ 
	getAdyacentList(nodo){
		return this.EdgeList.getAdyacentList(nodo.id);
	}
}

/**
* Clase para instaciar un objeto capaz de reaizar el algoritmo de Dijstra para rutas mas cortas.
*/
class Dijkstra{

	// Una grafica y 2 identificadores de nodos.
	constructor(grafica){
		this.G = grafica;
		this.A = null;
		this.B = null;

	}

	getMinPath(a,b) {

		this.A = this.G.getVertex(a.id);
		this.B = this.G.getVertex(b.id);

		// Nodo inicial
		this.A.father = 'root';
		this.A.distance = 0;
		this.current = this.A;


		var arista;
		var vecino;
		var adyacencias;
		var ciclos = 0;
		var recorrido = [];

		// Lista de nodos etiquetados
		var nodos = [];

		// Ciclo principal
		while(!this.B.isVisited){

			this.current.isVisited = true;

			// Obtenemos la lista de adyacencias del nodo actual
			adyacencias = this.G.getAdyacentList(this.current);

			// Actualizamos pesos de los vecinos.
			for(i = 0; i < adyacencias.length; i++){
				arista = adyacencias[i];
				vecino = arista.getExtremo(this.current);

				if(!vecino.isVisited){
					// Actalizamos pesos si es necesario
					if(vecino.distance == undefined || this.current.distance + arista.w  < vecino.distance){
						vecino.distance = this.current.distance + arista.w;
						
						// Actualizamos padre
						vecino.father = this.current;
						nodos.push(vecino);
					}
				}
			}
			this.current = this.getMin(nodos);
			ciclos += 1;	
		}

		// Reconstruimos ruta de A a B
		var n = this.B;
		while(n.father != 'root'){
			recorrido.push(n);
			n = n.father;
		}
		recorrido.push(this.A);
		return recorrido.reverse();

	}


	/*
	* List es una lista de objetos tipo node_D
	* SI list fuera un arbol binario balanceado seria mas eficiente.
	*/

	getMin(list){	
		var min = list[0];
		var min_idx = 0;
		for(var i = 1; i < list.length; i++){
			if(list[i].distance < min.distance){
				min = list[i];
				min_idx = i;
			}
		}
		// Lo borramos
		list.splice(min_idx,1);
		return min;
	}

}


/**
* Estructura que representa una lista de aristas.
*/

class EdgeList{
	constructor(){
		this.list = [];
	}
	/**
	* Agrega una arista a la lista. Si se quiere agregar la arista (a,b)
	* y la aritsa (b,a) ya existe estonces no lo hace
	*/
	append(edge){

		for(var i = 0; i < this.list.length; i++){
			// Estoy comparando directo por objetos pero mejor por id.
			if(this.list[i].a.id == edge.a.id && this.list[i].b.id == edge.b.id || this.list[i].a.id == edge.b.id && this.list[i].b.id == edge.a.id){
				return;
			}
		}
		this.list.push(edge);
	}
	/**
	* Devuelve una lista de aristas que tengan a 'node' como uno de sus extremos
	*/
	getAdyacentList(nodeId){
		var adyacentes = [];
		for(var i = 0; i < this.list.length; i++){
			if(this.list[i].a.id == nodeId || this.list[i].b.id == nodeId){
				adyacentes.push(this.list[i]);
			}
		}
		return adyacentes;
	}
}






/*
// Obtenemos una lista de nodos a partir de las estaciones

var estaciones_N = [];

// Puse este indice porque antes habia mas objetos en el json

for(id = 1; id < 284; id++){
	estacion = estaciones[id]
	if(estacion != undefined){
		estaciones_N.push(new nodo_D(id, estacion));
	}
}

// Obtenemos las listas de adycencias de aristas

var aristas = new EdgeList();

for(var k = 0; k < estaciones_N.length; k++){
	var nodo = estaciones_N[k];
	var ady_aux = listas_adyacencias[nodo.id];

	if(ady_aux != undefined){
		for(var i = 0; i < ady_aux.length; i++){
			var B;
			var costo;
			for(var j = 0; j < estaciones_N.length; j++){
				if(estaciones_N[j].id == ady_aux[i].id){
					B = estaciones_N[j];
					costo = ady_aux[i].costo;
					continue;
				}
			}
			var aris = new Edge(nodo, B, costo);
			aristas.append(aris)
		}
	}
}


var a = estaciones_N[0];
var b = estaciones_N[5];
var grafica = new Grafica(estaciones_N, aristas);
var dijkstra = new Dijkstra(grafica);
var ruta = dijkstra.getMinPath(a,b);


console.log('Ruta minima.');
console.log('Desde ' + a.data['Estación']);
console.log('Hasta ' + b.data['Estación']);
console.log('La ruta es:');
for(var i = 0; i < ruta.length; i++){
	console.log(ruta[i].data['Estación']);
}

*/

class lista_estaciones{
	constructor(){
		this.lista = {};
	}
	agrega(estacion){
		this.lista[estacion.nombre + '-' + estacion.ruta] = estacion;
	}
}

class Estacion{
	constructor(nombre, ruta){
		this.id = nombre + '-' + ruta;
		this.nombre = nombre;
		this.ruta = ruta;
	}
}



var todas = new lista_estaciones();

var  i = 0;
for (var key in datos){
	for (var ruta in datos[key]['Rutas']){
		todas.agrega(new Estacion(datos[key]['Estación'], datos[key]['Rutas'][ruta]));
		i += 1;
	}
}
//console.log(i);
//console.log(todas.lista);

var nodos_estaciones = [];

// Wrapper a las estaciones con nodo_D
var j = 0;
for (var k in todas.lista){
	nodos_estaciones.push(new nodo_D(j, todas.lista[k]));
	j += 1;
}

var aristas = new EdgeList();


var RT1 = [
	'Playa Caleta-RT1',
	'Playa Caletilla-RT1',
	'Plaza de Toros-RT1',
	'San Martín-RT1',
	'Tambuco-RT1',
	'La Suiza-RT1',
	//'Puente Club de Pesca-RT1',
	'Playa Langosta-RT1',
	'Playa Manzanillo-RT1',
	'Paseo del Pescador-RT1',
	//'Malecón-RT1',
	'Zócalo | Oviedo-RT1',
	'Melchor Ocampo-RT1',
	'Seguro Social-RT1',
	'Cine Río-RT1',
	'Flores Magón-RT1',
	'Michoacán-RT1',
	'Palacio Municipal-RT1',
	'Las Anclas-RT1',
	'Dr. Ignacio Chávez-RT1',
	'Encino-RT1',
	'Jacarandas-RT1',
	/*
	'Módulo de Policía "Y"-RT1',
	'Guadalupe Victoria-RT1',
	'La Cima-RT1',
	'Puente 1º de Mayo-RT1',
	'Puente Juan Aldama-RT1',
	'Puente La Tolva-RT1',
	'Ignacio Zaragiza-RT1',
	'Los Lirios-RT1',
	'Puente Niños Héroes-RT1',
	*/
	'Terminal de transferencia-RT1',
];

var RT2 = [
	'Zócalo | Oviedo-RT2',
	'Melchor Ocampo-RT2',
	'Seguro Social-RT2',
	'Cine Río-RT2',
	'Flores Magón-RT2',
	'Michoacán-RT2',
	'Palacio Municipal-RT2',
	'Las Anclas-RT2',
	'Dr. Ignacio Chávez-RT2',
	'Encino-RT2',
	'Jacarandas-RT2',
	'Terminal de transferencia-RT2',
	'Zapata-RT2',
	'La Postal-RT2',
	'Vacacional-RT2',
	'Central de abastos-RT2',
	'Leyes de Reforma-RT2',
	'Retorno-RT2',
	'La Venta-RT2',
	'Paso Limonero-RT2',
];

var RT3 = [
	'Zócalo | Oviedo-RT3',
	'Melchor Ocampo-RT3',
	'Seguro Social-RT3',
	'Cine Río-RT3',
	'Flores Magón-RT3',
	'Michoacán-RT3',
	'Palacio Municipal-RT3',
	'Las Anclas-RT3',
	'Dr. Ignacio Chávez-RT3',
	'Encino-RT3',
	'Jacarandas-RT3',
	'Libertad-RT3',
	'Bod. Costa Chica-RT3',
	//'17',
	'Cura-RT3',
	'Clínica-RT3',
	'El Rastro-RT3',
	'5 de Mayo-RT3',
	'La Máquina-RT3',
	'Planta Capama-RT3',
	//'10',
	//'Cruzero Cayaco-RT3',
	'Tecnológico-RT3',
	'Iglesia-RT3',
	'Piedra Roja-RT3',
	'Albañil-RT3',
	//'4',
	'Peña Blanca-RT3',
	'Av. Paseo Europeo-RT3',
	'Sec. 100-RT3',
];

var RT4 = [
	'La Ceiba-RT4',
	'Fragata Zaragoza-RT4',
	'Fragata María-RT4',
	'Almirante C. C.-RT4',
	'Nao Victoria-RT4',
	'Almendro-RT4',
	'Palmas-RT4',
	'Deportes-RT4',
	'Delprado-RT4',
	'Torres Gemelas-RT4',
	'Playa Condesa-RT4',
	'El Morro-RT4',
	'La Diana-RT4',
	'Av. Universidad 2-RT4',
	'Navegante Juan Pérez-RT4',
	'Mercado de Artesanías-RT4',
	'G. de Sandoval-RT4',
	'Palacio Municipal-RT4',
	'Michoacán-RT4',
	'Flores Magón-RT4',
	'Cine Río-RT4',
	'Seguro Social-RT4',
	'Melchor Ocampo-RT4',
	'Zócalo | Oviedo-RT4',
];

var RT5 = [
	'La Ceiba-RT5',
	'Fragata Zaragoza-RT5',
	'Fragata María-RT5',
	'Almirante C. C.-RT5',
	'Nao Victoria-RT5',
	'Almendro-RT5',
	'Palmas-RT5',
	'Deportes-RT5',
	'Delprado-RT5',
	'Torres Gemelas-RT5',
	'Playa Condesa-RT5',
	'El Morro-RT5',
	'La Diana-RT5',
	'Arroyo-RT5',
	'Amates-RT5',
	'Terminal de transferencia-RT5',
];

var RA1 = [
			'Palma Sola-RA1',
			'Río Atoyac-RA1',
			'Eje Vicente Guerrero-RA1',
			'José María Izazaga-RA1',
			'Cuauhtémoc-RA1',
			'Canal del Arroyo-RA1',
			'Icacos-RA1',
			'Julián Blanco-RA1',
			'Jesús Salgado-RA1',
			'Alta Cuauhtémoc-RA1',
			'Eduardo Neri-RA1',
			'Nicolás Bravo-RA1',
			'Ejido Las Pozas-RA1',
			'Zapata-RA1',
			'Terminal de transferencia-RA1',
];

var RA2 = [
			'Av. del Capire-RA2',
			'And. Circuito-RA2',
			'Av. de la Ceiba-RA2',
			'Orizaba-RA2',
			'Atlixtac-RA2',
			'Tlapehuala-RA2',
			'Nautla-RA2',
			'Vacacional-RA2',
			'La Postal-RA2',
			'Zapata-RA2',
			'Terminal de transferencia-RA2',

];

var RA3 = [
			'Santo Tomás-RA3',
			'Ventura Escobar-RA3',
			'Zócalo-RA3',
			'Fco. I. Madero-RA3',
			'Av. del Tanque-RA3',
			'Cion. Tres Tamarindos-RA3',
			'Chico Portillo-RA3',
			'And. Bugambilias-RA3',
			'10 de Mayo-RA3',
			'La Venta-RA3',
			'Retorno-RA3',
			'Leyes de Reforma-RA3',
			'Central de abastos-RA3',
			'Paso Limonero-RA3',
			'Vacacional-RA3',
			'La Postal-RA3',
			'Zapata-RA3',
			'Terminal de transferencia-RA3',

];

var RA4 = [
			'Tulipanes-RA4',
			'Clavel-RA4',
			'And. Fabrica-RA4',
			'Calle 15-RA4',
			'Calle 10-RA4',
			'Olivos-RA4',
			'Vacacional-RA4',
			'La Postal-RA4',
			'Zapata-RA4',
			'Terminal de transferencia-RA4'
];

var RA5 = [
			'Cocula-RA5',
			'Simón Bolivar-RA5',
			'Calle 14-RA5',
			'Calle 10-RA5',
			'Calle 27-RA5',
			'Calle 23-RA5',
			'Calle 17-RA5',
			'Calle 11-RA5',
			'Calle 7-RA5',
			'Calle 3-RA5',
			'Zapata-RA5',
			'Terminal de transferencia-RA5',
];

var RA6 = [
			'Av. de Las Cruces-RA6',
			'San Patricio-RA6',
			'Francisco Márquez-RA6',
			'Venustiano Carranza-RA6',
			'Simón Bolivar-RA6',
			'Vicente Guerrero-RA6',
			'Módulo de Policía "Y"-RA6',
];

var RA7 = [
			'2 de Abril-RA7',
			'Av. Cumbres-RA7',
			'Jorullo-RA7',
			'Popocatépetl-RA7',
			'Av. del Colegio-RA7',
			'Las Conchas-RA7',
			'Glorieta-RA7',
			'M. Heredia-RA7',
			'Jacarandas-RA7',
			'Bugambilias-RA7',
];

var RA8 = [
			'2 de Abril-RA8',
			'Av. Cumbres-RA8',
			'Jorullo-RA8',
			'Popocatépetl-RA8',
			'Av. del Colegio-RA8',
			'Alejandro Cervantes-RA8',
			'Dragos-RA8',
			'Amates-RA8',
			'Arroyo-RA8',
			'Comercial M.-RA8',
			'La Diana-RA8',
			'Av. Bella Vista-RA8',
			'Av. Universidad 1-RA8',
			'Navegante Juan Pérez-RA8',
			'Y. Yáñez Pinzón-RA8',
			'Norte-RA8',
			'La Nao-RA8',
			'Av. Universidad 2-RA8',
			'G. de Sandoval-RA8',
			'Las Anclas-RA8',
			'Norte-RA8'

];
var RA9 = [
			'Monte Everest-RA9',
			'Juan de Dios Bonilla-RA9',
			'Niños Héroes de Veracruz-RA9',
			'Castillo Bretón-RA9',
			'Fernando Magallanes-RA9',
			'Av. Horacio Nelson-RA9',
			'Cristobal Colón-RA9',
			'Almirante C. C.-RA9'

];
var RA10 = [
			'Av. Tanque-RA10',
			'Condominio D-RA10',
			'Tuxpan-RA10',
			'Nautla-RA10',
			'Tampico-RA10',
			'Río Coyuca-RA10',
			'Tepic-RA10',
			'Nogales-RA10',
			'Querétaro-RA10',
			'Durango-RA10',
			'Zacatecas-RA10',
			'Tamaulipas-RA10',
			'Torreón-RA10',
			'Av. Sonora-RA10',
			'Chihuahua-RA10',
			'Michoacán-RA10',
			'Flores Magón-RA10',
			'Av. Sonora-RA10',

];
var RA11 = [
		'Av. Tanque-RA11',
		'Condominio D-RA11',
		'Tuxpan-RA11',
		'Nautla-RA11',
		'Tampico-RA11',
		'Río Coyuca-RA11',
		'B. D. del Castillo-RA11',
		'Baja California-RA11',
		'Querétaro-RA11',
		'Chiapas-RA11',
		'Oaxaca-RA11',
		'Colima-RA11',
		'Coahuila-RA11',
		'Av. Sonora-RA11',
		'Miguel Acuña-RA11',
		'Cda. de Vallarta-RA11',
		'Nuevo León-RA11',
		'Jalapa-RA11',
		'Colima-RA11',
		];

var rutas  = [RT1, RT2, RT3, RT4, RT5, RA1, RA2, RA3, RA4, RA5, RA6, RA7, RA8, RA9, RA10, RA11];


function agregaRuta(ruta){

	for(var i = 0; i < ruta.length; i++){
		if( i + 1 == ruta.length){
			break;
		}
		var est1 = todas.lista[ruta[i]];
		var est2 = todas.lista[ruta[i+1]];

		if(est1 == undefined || est2 == undefined){
			return false;
		}
		var nodo_1;
		var nodo_2;
		var costo = 1;
		for(var j = 0; j < nodos_estaciones.length; j++){
			if(nodos_estaciones[j].data.id == est1.nombre + '-' + est1.ruta){
				nodo_1 = nodos_estaciones[j];
		
			}
			if(nodos_estaciones[j].data.id == est2.nombre + '-' + est2.ruta){
				nodo_2 = nodos_estaciones[j];
			}
		}

		aristas.append(new Edge(nodo_1, nodo_2, costo));

	}

	return true;

}

for(var r = 0; r < rutas.length; r++){
	var ruta = rutas[r];
	if(agregaRuta(ruta)){

	} else {
		console.log('Error en la ruta con indixe ' + r)
	}
}

/**
*
* Agregamos todas las adyacencias entre rutas
*
*/

function getArista(esta1_id, esta2_id){
	var edge;
	var nodo1;
	var nodo2;
	for(var t = 0; t < nodos_estaciones.length; t++){
		if(nodos_estaciones[t].data.id == esta1_id){
			nodo1 = nodos_estaciones[t];
		}
		if(nodos_estaciones[t].data.id == esta2_id){
			nodo2 = nodos_estaciones[t];
		}
	}
	return new Edge(nodo1, nodo2, 1);
}

// Estaciones adyacentes en RA10 y RA11 

var arista = getArista('Av. Tanque-RA10', 'Av. Tanque-RA11');
aristas.append(arista);
var arista = getArista('Condominio D-RA10', 'Condominio D-RA11');
aristas.append(arista);
var arista = getArista('Tuxpan-RA10', 'Tuxpan-RA11');
aristas.append(arista);
var arista = getArista('Nautla-RA10', 'Nautla-RA11');
aristas.append(arista);
var arista = getArista('Tampico-RA10', 'Tampico-RA11');
aristas.append(arista);
var arista = getArista('Tampico-RA10', 'Tampico-RA11');
aristas.append(arista);
var arista = getArista('Río Coyuca-RA10', 'Río Coyuca-RA11');
aristas.append(arista);




// Nodos de origen y destino
var a;
var b;
for(var t = 0; t < nodos_estaciones.length; t++){
	if(nodos_estaciones[t].data.id == 'Canal del Arroyo-RA1'){
		a = nodos_estaciones[t];
	}
	if(nodos_estaciones[t].data.id == 'Terminal de transferencia-RA1'){
		b = nodos_estaciones[t];
	}
}

var grafica = new Grafica(nodos_estaciones, aristas);
var dijkstra = new Dijkstra(grafica);

var ruta = dijkstra.getMinPath(a,b);


console.log('Ruta minima.');
console.log('Desde ' + a.data['nombre'] + ", Ruta: " + a.data['ruta']);
console.log('Hasta ' + b.data['nombre'] + ", Ruta: " + a.data['ruta']);
console.log('La ruta es:');
for(var i = 0; i < ruta.length; i++){
	console.log("Estacion: " + ruta[i].data['nombre'] + ", Ruta: "+ ruta[i].data['ruta']);
}
