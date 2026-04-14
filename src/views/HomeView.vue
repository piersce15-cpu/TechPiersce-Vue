<template>
  <v-container class="home-container">

    <!-- HERO -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Bienvenidos a TechPiersce</h1>
        <p>Encuentra tus dispositivos favoritos con despacho a todo Chile.</p>

        <v-btn
          color="accent"
          size="large"
          to="/productos"
          class="cta-btn"
        >
          Ver el Catálogo
        </v-btn>
      </div>
    </section>

    <!-- CATEGORÍAS -->
    <section class="categories-section">
      <h2>Descubre nuestras categorías</h2>

      <v-row class="mt-4">

        <v-col cols="12" md="4">
          <div class="cat-card">
            <span class="icon">📱</span>
            <span class="label">Smartphones</span>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="cat-card">
            <span class="icon">💻</span>
            <span class="label">Laptops</span>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="cat-card">
            <span class="icon">📟</span>
            <span class="label">Tablets</span>
          </div>
        </v-col>

      </v-row>
    </section>

  </v-container>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  padding: 0 5% 50px 5%;
}

/* HERO */
.hero-section {
  background-image: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 20px;
  text-align: center;
  border-radius: 12px;
  margin: 30px 0 60px 0;
}

.hero-content h1 {
  font-size: clamp(1.5rem, 8vw, 3rem);
  margin-bottom: 10px;
  font-weight: 800;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* BOTÓN */
.cta-btn {
  border-radius: 30px;
  font-weight: bold;
}

/* CATEGORÍAS */
.categories-section {
  text-align: center;
}

.categories-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 700;
}

/* CARDS IGUALES */
.cat-card {
  background-color: white;
  border: 1px solid #eee;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, transform 0.2s;
  cursor: pointer;
  height: 100%;
}

.cat-card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transform: translateY(-5px);
  border-color: #42b983;
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}
</style>