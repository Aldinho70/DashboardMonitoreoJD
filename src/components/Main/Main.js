$( () => {
    $("#root-main").append(`
        <div class=" main-shell">
            <div class="row g-2 main-layout">
                <!-- Operaciones -->
                <section class="col-12 col-xl-9">
                    <div class="main-panel main-panel--operations h-100" id="root_button_module">
                        <div class="row h-100 main-panel__columns">
                            <div class="col-12 col-md-6 d-flex min-h-0">
                                <div class="main-scroll-col btn-module w-100" id="button_module1"></div>
                            </div>
                            <div class="col-12 col-md-6 d-flex min-h-0">
                                <div class="main-scroll-col btn-module w-100" id="button_module2"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Tabla de unidades -->
                <aside class="col-12 col-xl-3 d-flex flex-column min-h-0">
    
                    <!-- Notificaciones -->
                    <div class="main-panel mb-2 d-none d-xl-block notifications-panel">
                        <div class="main-panel__head">
                            <span class="main-panel__title">Notificaciones</span>
                        </div>
                        <div class="notifications-container" id="root_table_notificacions"></div>
                    </div>

                    <!-- Tabla -->
                    <div class="main-panel main-panel--units flex-grow-1 min-h-0">
                        <div class="main-panel__head">
                            <span class="main-panel__title">Tabla de unidades</span>
                        </div>

                        <div class="main-scroll-col main-scroll-col--table">
                            <table class="table table-striped table-sm align-middle mb-0" id="table-units2">
                                <thead></thead>
                                <tbody id="table-tbody"></tbody>
                            </table>
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    `)
} )
