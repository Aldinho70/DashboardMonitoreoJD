$( () => {
    $("#root-main").append(`
        <div class="row">

            <!-- Operaciones -->
            <div class="col-9 rounded-4 bg-light " id="root_button_module">
                <div class="row ">
                    <div class="col-md-6 col-sm-12 btn-module" id="button_module1"></div>
                    <div class="col-md-6 col-sm-12 btn-module" id="button_module2"></div>
                </div>
            </div>

            <!-- Tabla de unidades -->
            <div class="col-3 border rounded-4 bg-secondary">
                <div class="text-center">
                    <span class="badge rounded-pill text-bg-secndary text center fs-6">Tabla de unidades</span>
                    <hr class="border border-light border-2 opacity-50">
                </div>
                <div class="scrollable-table rounded-4">
                    <table class="table table-striped " id="table-units2">
                        <thead>
                            <!-- <tr>
                                <th scope="col">Unidades</th>
                            </tr> -->
                        </thead>
                        <tbody id="table-tbody"></tbody>
                    </table>
                </div>
            </div>
        </div>
    `)
} )