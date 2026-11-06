<template>
  <div class="head">
    <nav class="navbar glass z-1 top-0 navbar-expand-lg">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/" exact-active-class="active">
          <div class="glitch-container">
            <h1 class="glitch-text">Chiara's</h1>
          </div>
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link pill" to="/about" active-class="active">
                About
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link pill dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Components examples
              </a>
              <ul class="dropdown-menu glass-dropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped src="./navigation.css"></style>
<style scoped src="./navigationresponsive.css"></style>
