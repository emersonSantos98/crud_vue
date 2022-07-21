<template>
    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar"
        prepend-icon="mdi-camera" label="Avatar"></v-file-input>
    <section id="login">
        <div class="container text-center">
            <div class="row justify-content-center align-items-center vh-100">
                <div class="col-auto">
                    <div class="card">
                        <div class="card-header text-center">
                            <p></p>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example1" class="form-control" />
                                    <label class="form-label" for="form2Example1">Email</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example2" class="form-control" />
                                    <label class="form-label" for="form2Example2">Senha</label>
                                </div>
                                <div class="row mb-4">
                                    <div class="col d-flex justify-content-center">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form2Example31"
                                                checked />
                                            <label class="form-check-label" for="form2Example31"> Lembre-se de mim.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <a href="#!">Esqueceu a senha?</a>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-block mb-4">Login</button>
                                <div class="text-center">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <pre>{{ Login }}</pre>
</template>

<script>

export default {
    nome: "TeinlaLogin",
    data: function () {
        return {
            login: {
                email: '',
                password: '',
                rules: [
                    value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
                ],
            }

        }
    }
}



</script>
<style>
</style>