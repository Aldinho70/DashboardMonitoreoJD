$(() =>{
    $("#root-modals").append(`

        <!-- Estatus de las unidades  -->
        <div class="modal fade" tabindex="-1" id="modal-search_units">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Buscar unidad</h5>
                        <button type="button" class="btn btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <select class="form-select w-100" id="select_unit_search" aria-label="Buscar unidad"></select>
                    </div>
                    <button type="button" class="btn btn-primary" id="btn_search_select_unit" onclick="getOptionSelectUnitSearch();">
                        Buscar unidad
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal de campos personalizados -->
        <div class="modal" tabindex="-1" id="modal_campos_personalizados">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Campos personalizados de la unidad <span id="name_unit_modal"></span> </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <table id="table" class="table">
                            <tbody id="modal_body_campos_personalizados">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `)

    /* Toast de bienvenida */
    $("#root-toast").append(`
        <!-- Toast flotante de bienvenida al usuario inicial  -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="welcomeinit" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="./src/assets/img/logojd.png" width="30" height="24" class="rounded me-2 " alt="...">
                    <strong class="me-auto">Bienvenido</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Ingresando con la cuenta <span id="name_user_init"></span>
                </div>
            </div>
        </div>
    `)
})