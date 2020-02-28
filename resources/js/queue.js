import Vue from 'vue'

const Public = new vue{

    Echo.join(`Public`)
    .here((users) => {
        this.numberOfUsers = users.length;
    })
    .joining(() => {
        this.numberOfUsers += 1;
    })
    .leaving(() => {
        this.numberOfUsers -= 1;
    });
}
