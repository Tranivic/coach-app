<template>
<li>
    <base-badge class="card-badge">
        <div class="card-top">
            <div class="superior">
                <img src="../assets/no-picture.png" alt="Profile img">
                <h4>{{request.senderName}}</h4>
                <h4 class="date">{{request.sendDate}}</h4>
            </div>
            <div class="inferior">
                <h5>{{request.messageType}} to: <mark>@{{request.msgFor}}</mark></h5>
            </div>
        </div>
        <div class="card-bottom">
            <p>{{request.message}}</p>
        </div>
    </base-badge>
</li>
</template>

<script>
export default {
    props: ['request'],
}
</script>

<style lang="css" scoped>
li {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 2rem 0;
}

.card-badge {
    padding: 0;
    margin: 0;
}

.superior {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: .5rem;
}

.inferior {
    display: flex;
    padding-left: 5.5rem;
    margin-top: -1rem;
    color: rgb(71, 71, 71);
}

mark {
    background-color: #0D81F6;
    color: white;
    font-weight: 400;
    padding: .2rem .6rem;
    border-radius: 10rem;
}

img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 0 .5rem;
}

h4 {
    padding: 0 .2rem;
}

.date {
    color: rgb(179, 179, 179);
}

.card-bottom {
    display: flex;
    justify-content: flex-start;
    padding: 1rem 1rem;
}

p {
    margin: 0;
    padding: 0 3rem;
    text-align: justify;
    text-indent: 1rem;
}
</style>
