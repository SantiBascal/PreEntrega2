const items = [];

function inicio(user){
    console.log("Bienvenido " + user);
    operacion()
}

function op1(){
    if(items.length == 0 ){
        console.log("No tiene ningun item")
        console.log("------------------------");
        console.log("1: Agregar Item Nuevo ")
        console.log("2: Volver al Inicio")
        let eleccion = Number(prompt("seleccione una opcion"));
        if(eleccion === 1){
            op2()
        }else if(eleccion === 2){
            operacion()
        }else{
            console.log("Opcion Invalida");
            console.log("------------------------");
            op1()
        }
    }else{
        for(let i=0; i<items.length; i+=1){
            console.log("ID= " + i + " " + items[i]);
        }
        operacion()
    }
}

function op2(itemName){
    itemName = prompt("Nombre del item")
    items.push(itemName)
    console.log("Agregaste " + itemName)
    if(confirm("Quiere agregar otro item?") === true){
        op2()
    }else{
        operacion()
    }
}


function op3(){
    if(items.length == 0){
        console.log("No tiene ningun item para eliminar")
        console.log("------------------------");
        console.log("1: Agregar Item Nuevo ")
        console.log("2: Volver al Inicio")
        let eleccion = Number(prompt("seleccione una opcion"));
        if(eleccion === 1){
            op2()
        }else if(eleccion === 2){
            operacion()
        }else{
            console.log("Opcion Invalida");
            console.log("------------------------");
            op3()
        }
    }else{
        console.log("Que item quiere eliminar?")

        for(let i=0; i<items.length; i+=1){
            console.log("ID= " + i + " " + items[i])
        }
        items.splice((x = prompt("Ingrese el ID que quiere eliminar")), 1);

            console.log("------------------------");
            console.log("Eliminio el ID " + x)
            console.log("------------------------");
        
            if(confirm("Quiere eliminar otro item?") === true){
            op3()
            }else{
            operacion()
            }

    }
}


function op4(){
    if(confirm("Seguro que quiere salir?") === true){
        console.log("Salio exitosamente")
    }else{
        operacion()
    }
}



function operacion(){
    console.log("------------------------");
    console.log("1: Ver Items ");
    console.log("2: Agregar un Item");
    console.log("3: Eliminar un Item");
    console.log("4: Salir");
    console.log("------------------------");
    let opcion = prompt("seleccione una opcion");
    switch(opcion){
        case "1":
            op1()
            break
        case "2":
            op2()
            break
        case "3":
            op3()
            break
        case "4":
            op4()
            break
        default:
            console.log("Opcion Invalida")
            operacion()
    }
}



inicio(prompt("ingrese su usuario"));

