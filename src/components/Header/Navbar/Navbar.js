$(() => {
    $("#root-navbar").append(`
        <div class="container d-flex justify-content-between align-items-center">
            <!-- Logo a la izquierda -->
            <a class="navbar-brand text-warning" href="#">
                <img src="src/assets/img/logojd.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                Jornada Digital
            </a>

            <!-- Btn de colapsar navbar -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menú colapsable con opciones -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <button class="nav-link" onclick="showStatus();" id="btn-status">
                            Estatus de la unidades
                        </button>
                    </li>
                    <li class="nav-item d-flex gap-2">
                        <button class="btn btn-sm btn-secondary d-flex align-items-center position-relative rounded-5" onclick="showModal('#modal-notificaciones');">
                            <i class="bi bi-bell-fill me-2"></i> <!-- Icono de campana -->
                            Notificaciones
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cont_notificacion_gral" id="cont_notificacion">0</span>
                        </button>
                    </li>
                </ul>
                <!-- Menu de opciones del usuario -->
                <div class="ms-auto text-danger d-flex align-items-center">
                    <div class="btn-group me-3" role="group">
                        <button type="button" class="btn btn-sm btn-warning dropdown-toggle rounded-5" id="user_Wialon" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" id="btn-logout" href="index.html">Cerrar sesion</a></li>
                            <li><a class="dropdown-item" id="btn-sarch_unit" onclick="searchUnit()">Buscar unidad</a></li>
                        </ul>
                        <span id="token" style="display: none;"></span>
                        <span id="session_finish" style="display: none;"></span>
                    </div>

                    <!-- Botón de carga -->
                    <button class="btn btn-sm btn-primary rounded-5" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span id="timer" role="status">Se actualizará en 0 segundos...</span>
                    </button>
                </div>
            </div>

        </div>

        <!-- Logo a la derecha -->
        <a class="navbar-brand text-warning" href="#">
            <!-- <img src="src/assets/img/logosetramex.png" alt=""  height="24" class="d-inline-block align-text-top" /> -->
        </a>
    `);
})