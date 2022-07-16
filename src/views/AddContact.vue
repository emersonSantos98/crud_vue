<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contato</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form>
                    <div class="md-2">
                        <input type="text" class="form-control  my-1" placeholder="Nome">
                    </div>
                    <div class="md-2">
                        <input type="text" class="form-control  my-1" placeholder="photo URL">
                    </div>
                    <div class="md-2">
                        <input type="email" class="form-control  my-1" placeholder="Email">
                    </div>
                    <div class="md-2">
                        <input type="texto" class="form-control  my-1" placeholder="Telefone">
                    </div>
                    <div class="md-2">
                        <input type="text" class="form-control  my-1" placeholder="company">
                    </div>
                    <div class="md-2">
                        <input type="text" class="form-control  my-1" placeholder="titulo">
                    </div>
                    <div class="mb-2">
                        <select class="form-control  my-1">
                            <option value="">selecione Gupo</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Criar">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://truesun.in/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    nome: "AddContact"
}
</script>

<style scoped>

</style>