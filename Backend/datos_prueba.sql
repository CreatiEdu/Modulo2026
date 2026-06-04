-- datos de prueba inmosmart

-- roles
INSERT INTO `Roles` VALUES (1, 'Usuario');

INSERT INTO `Roles` VALUES (2, 'Usuarios');

INSERT INTO `Roles` VALUES (3, 'Administrador');

-- tipos
INSERT INTO `TipoPropiedad` VALUES (1, 'Casa');

INSERT INTO `TipoPropiedad` VALUES (2, 'Departamento');

INSERT INTO `TipoPropiedad` VALUES (3, 'Local');

INSERT INTO `TipoPropiedad` VALUES (4, 'Terreno');

-- estados
INSERT INTO `PropiedadEstado` VALUES (1, 'Disponible');

INSERT INTO `PropiedadEstado` VALUES (2, 'Reservado');

INSERT INTO `PropiedadEstado` VALUES (3, 'En evaluacion');

INSERT INTO `PropiedadEstado` VALUES (4, 'Alquilado');

INSERT INTO `PropiedadEstado` VALUES (5, 'Vendido');

-- gestores y administradores
INSERT INTO
    `Usuarios`
VALUES (
        1,
        'Carlos Mendez',
        'carlosmendez@gmail.com',
        'carlos123',
        '30111223',
        '3584821045',
        2
    );

INSERT INTO
    `Usuarios`
VALUES (
        2,
        'Laura Gimenez',
        'lauragimenez@gmail.com',
        'laura456',
        '30111224',
        '3584920318',
        2
    );

INSERT INTO
    `Usuarios`
VALUES (
        3,
        'Roberto Silva',
        'admin@inmosmart.com',
        'admin2026',
        '30111225',
        '3584000001',
        3
    );

-- usuarios
INSERT INTO
    `Usuarios`
VALUES (
        4,
        'Juan Perez',
        'juanperez92@gmail.com',
        'juan123',
        '30111222',
        '3584112233',
        1
    );

INSERT INTO
    `Usuarios`
VALUES (
        5,
        'Maria Lopez',
        'mlopez@hotmail.com',
        'maria456',
        '32445678',
        '3584223344',
        1
    );

INSERT INTO
    `Usuarios`
VALUES (
        6,
        'Diego Fernandez',
        'diegof@gmail.com',
        'diego789',
        '28334455',
        '3584334455',
        1
    );

INSERT INTO
    `Usuarios`
VALUES (
        7,
        'Ana Gomez',
        'anita.gomez@gmail.com',
        'ana2026',
        '35556677',
        '3584445566',
        1
    );

-- propiedades
INSERT INTO
    `Propiedad`
VALUES (
        1,
        'Casa en barrio Alberdi',
        'Casa con jardin, cochera y parrilla. Tres dormitorios. Buen estado general.',
        85000.00,
        3,
        2,
        160.0,
        true,
        1,
        1,
        1
    );

INSERT INTO
    `Propiedad`
VALUES (
        2,
        'Depto en el centro',
        'Piso 3 con balcon. Dos ambientes. A metros de la peatonal Sobremonte. Apto banco.',
        210000.00,
        2,
        1,
        58.0,
        false,
        2,
        1,
        1
    );

INSERT INTO
    `Propiedad`
VALUES (
        3,
        'Casa barrio Banda Norte',
        '4 dormitorios, 2 baños, cochera. Zona tranquila cerca del rio.',
        76000.00,
        4,
        2,
        200.0,
        true,
        1,
        2,
        2
    );

INSERT INTO
    `Propiedad`
VALUES (
        4,
        'Monoambiente amoblado zona UNRC',
        'Todo incluido, wifi y expensas. Ideal estudiantes. Disponible desde marzo.',
        130000.00,
        1,
        1,
        32.0,
        false,
        2,
        4,
        2
    );

INSERT INTO
    `Propiedad`
VALUES (
        5,
        'Local comercial Av Hipólito Yrigoyen',
        'Local a la calle con vidriera, deposito y baño. Mucho paso comercial.',
        320000.00,
        0,
        1,
        75.0,
        false,
        3,
        1,
        1
    );

INSERT INTO
    `Propiedad`
VALUES (
        6,
        'Terreno en Las Higueras',
        'Lote 500m2 a 10km de Rio Cuarto. Todos los servicios. Escritura lista.',
        18000.00,
        0,
        0,
        500.0,
        false,
        4,
        1,
        2
    );

INSERT INTO
    `Propiedad`
VALUES (
        7,
        'Casa en barrio jardín',
        'Tres dorm, pileta, quincho y garage doble. Barrio privado con seguridad.',
        175000.00,
        3,
        2,
        260.0,
        true,
        1,
        3,
        1
    );

-- favoritos
INSERT INTO `Favoritos` VALUES (1, 1, 1);

INSERT INTO `Favoritos` VALUES (2, 2, 1);

INSERT INTO `Favoritos` VALUES (3, 3, 2);

INSERT INTO `Favoritos` VALUES (4, 7, 3);

-- contratos
INSERT INTO
    `Contractos`
VALUES (
        1,
        1,
        '2026-01-15',
        '2027-01-15',
        210000.00,
        'contratos/contrato_001.pdf',
        2
    );

INSERT INTO
    `Contractos`
VALUES (
        2,
        2,
        '2025-06-01',
        '2026-06-01',
        130000.00,
        'contratos/contrato_002.pdf',
        4
    );