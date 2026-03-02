$(() => {
    $("#root-navbar").append(`
        <div class="container-fluid px-2 px-lg-3 navbar-min">
            <a class="navbar-brand m-0 d-flex align-items-center gap-2 navbar-min__brand" href="#">
                <img src="src/assets/img/logojd.png" alt="Jornada Digital" width="22" height="22" class="rounded-2" />
                <span class="navbar-min__title">Jornada Digital</span>
            </a>

            <div class="d-flex align-items-center gap-3 ms-auto navbar-min__actions">
                <button class="btn btn-warning position-relative rounded-pill navbar-min__btn" onclick="showModal('#modal-notificaciones');">
                    <i class="bi bi-bell-fill"></i>
                    <span class="d-none d-md-inline ms-1">Notificaciones</span>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cont_notificacion_gral" id="cont_notificacion">0</span>
                </button>

                <!--<button class="btn btn-sm rounded-pill navbar-min__btn d-flex align-items-center gap-1" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span id="timer" role="status" class="d-none d-lg-inline">Se actualizara en 0 segundos...</span>
                </button>-->

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm dropdown-toggle rounded-pill navbar-min__btn" id="user_Wialon" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                        <li><a class="dropdown-item" id="btn-sarch_unit" onclick="searchUnit()">Buscar unidad</a></li>
                        <li><a class="dropdown-item" id="btn-logout" href="index.html">Cerrar sesion</a></li>
                    </ul>
                    <span id="token" class="d-none"></span>
                    <span id="session_finish" class="d-none"></span>
                </div>
            </div>
        </div>
    `);
})
