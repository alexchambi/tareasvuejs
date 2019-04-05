Vue.component('el-titulo',{
    template: '<h3 class="center">{{titulo}}</h3>',
    data:  function(){
        return {titulo: 'Lista de Tareas'}
    }
})

var app = new Vue({
    el: '#app',
    data: {
        tareas: [
            {nombre: 'Actividad 1', actividad: false},
            {nombre: 'Actividad 2', actividad: false},
            {nombre: 'Actividad 3', actividad: false},
            {nombre: 'Actividad 4', actividad: false},
            {nombre: 'Actividad 5', actividad: false}
        ],
        entrada: '',
    },
    methods: {
        agregarTarea(){
            var texto = this.entrada.trim();
            if(texto){
                this.tareas.push({
                    nombre: texto,
                    actividad: false
                })
            }
            else{
                alert('Ingrese una tarea!.')
            }
            this.entrada = '';
        },
        borrarTarea(i){
            this.tareas.splice(i,1);

        }
    },
    computed: {
        

        filtroPrioridad(){
            return this.tareas.sort((tarea) => tarea.actividad);
        },

        filtroAntiguedad(){
            return this.tareas.sort((a,b) => a.actividad - b.actividad);
        }
    },
});