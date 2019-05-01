let melamar = false;

function saya(message = null, callback = null){
    if(message){
        console.log(message);
        console.log("saya : siap")
        return callback();
    } else {
        console.log("saya : melamar ke sti");
        melamar = true;
        hr();
    }
}

function hr(){
    const promise = new Promise((resolve, reject) => {
        if(melamar){
            resolve("hr sti : silahkan test psycotest");
        } else {
            reject("hr sti : tidak ada yang melamar");
        }
    });

    promise
        .then(res => {
            return saya(res, psycotest)
        })
        .then(res => {
            if(res){
                console.log(res + " dan lulus");
                return saya("hr : kamu lulus, silahkan interview dengan user", user);
            } else {
                console.log(res + " dan gagal");
            }
        })
        .then(res => {
            if(res){
                console.log(res[0] + " " + res[1]);
                saya("hr : kamu lulus, silahkan bekerja", kantor);
            } else {
                console.log(res[0] + " dan gagal");
            }
        })
        .catch(res => {
            console.log(res);
        })
}

function psycotest(){
    return "psycotest : pelamar sudah psycotest";
}

function user(){
    return ["user : pelamar sudah interview", "dan lulus"];
}

function kantor(){
    console.log("kantor : selamat bergabung");
}

saya();
