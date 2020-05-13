# Ejercicio WAI-ARIA

**Adán de la Rosa Lugo**

**Óscar Ignacio Pozo Fernández**

**Alejandro Estévez Chinea**

Para el informe hemos seleccionado las páginas que hemos desarrollado como grupo en las que se ha incluido al menos un formulario, las cuales son:

- Práctica de HTML.
- Práctica de Javascript.
- Práctica de AJAX.
- Práctica de Firebase.

El Lector de Pantalla usado es ChromeVox. El objetivo es que, en cada página, el Lector de Pantalla sea capaz de leer prácticamente todo a través de la Tabulación y el uso de la Flechas. De esta manera, la voz siempre leerá los textos para el usuario. 

## Práctica de HTML	

En esta página, que solo se compone de un fichero index.html, se localizan los siguientes elementos Tablas, enlaces, secciones y artículos. La página es muy sencilla y aún así hemos detectado que sin los atributos Aria, la navegación por teclado se saltaba partes importantes de la página como por ejemplo, la tabla y las diferentes partes con contenido y importante.

La previsualización de esta página sin aplicar wai-aria seria:

<img src="https://lh6.googleusercontent.com/sv2xK1kCiAYuq9J8XGoFjSNvzNB6WWTcbYlgDDMmmrfu07jGuH7mBP7q8seHPsMYdndxnmFgbDJxtRb_a9FslYZmILpJLvGvg5YcUO2W2tyTN3C-ow4nUTRXuwjHsqnQ9A0iMhdu" alt="img" style="zoom:150%;" />

Una vez aplicado Wai-aria, la navegación por la página ha mejorado bastante.

![img](https://lh4.googleusercontent.com/LDbv_tYvPFYHvLo15a_iCRcWPZgm0suWGr8VRnNjuc2WFBsWMFG0e3S1dbCI7ve3TyLanS1iuFhVMMvsD5fvJe_nsnsurTXU6jNlQc8iKC-4UYzMOJJzv6JD1dlvfciZvourQl8r)

Se han aplicado roles en la tabla para las **columnas** (column header, grid, gridcell...), **artículos** (article), **divs con contenido** (complementary), **formularios** (form).



## Práctica de Javascript

La previsualización de esta página sin aplicar Wai-Aria seria:

![img](https://lh3.googleusercontent.com/lekvKo3b7fgP22vd9Q552_aJfW-aanxULgNeNWYPgjd5ITXgdCJzSeuI3q2RgzmGJcogILkfs1gG_tTyrW6m_P6IjOigavMd8AXBi-COXAFkrwhL1kb3rn-pC50Wjtg8GY0uXve_)

Una vez aplicado Wai-aria:

<img src="https://lh3.googleusercontent.com/cw1_0pbmLK0JcUHggw2vXfQHw5IaS-HIuLf84uqCX32J4YbdTPy0hSa8xbb7jXoud6g8H3dyBtTRx0X3GtoqyaiOeW_ltUffdYUTbyt2kRB8aUqrAuHKEiMYIllL-dUoBrP5nlTT" alt="img" style="zoom:150%;" />

Las etiquetas que hemos aplicado principalmente son las de **tabindex=”0”**, que consiguen que los elementos que tengan esa etiqueta sean resaltados mediante la tabulación. Los hemos aplicado en los Título, de manera que el Lector de Pantalla lee el contenido.

## Práctica de AJAX

La navegación por la página antes de aplicar wai-aria era:

![img](https://lh5.googleusercontent.com/HayMVpA05CcKsEoiWyZBhzaULSpQ5FwhC-AzlLpYwU1cS1N2gbxrHDS0a9aqQPl3ZRzNwof8SZjQ9NzQEbzgIKRJpGvX8L_8eTlInA1j_XXGuxGeMMFvWihz2cb0Y3EC542rU6ZV)

La cual no nos permitía navegar por el contenido mostrado tras la petición.

Una vez aplicado wai-aria la navegación con chromeVox nos permite acceder a todos los elementos de la página.

![img](https://lh6.googleusercontent.com/czqcSaHMBxZu8cdid2JdqUGFt1g08N86ZCLJ3FX4TUW0d1EUH1hk2rBZnQqlOcn12GiCA1yWhnyCgK0iq2On4IIdc5OAxZhsvMPyoTNCEDCVOz5CoT0Y3apT-J-uQ3L3KEq9guLA)

Lo añadido para mejorar su funcionalidad también es sencillo: añadido el **role=”form”** a la propia etiqueta <form> y **tabindex=”0”** para que lea correctamente que es un formulario.

También se le ha añadido **tabindex=”0” al párrafo explicativo y a todos los párrafos nuevos** que se generan al final, de manera que uno puede usar un Lector de Pantalla para leerlos. 

## Práctica de Firebase

Antes de usar Wai-Aria:

![img](https://lh6.googleusercontent.com/u0Q0249N3-3-ESm-rPdXPZ-CUFgR1oKGKX1Tz6T5qI-Ex1tO66hV0CZeTIjAOXE0cXvMuKUNvFt134KG1SzuGBdwXx2vEywlxyFmVcbQhI-gn5L-xwxKSCo2FIe7XTrvRFIVgXd1)

Después de usar Wai-Aria:

![img](https://lh4.googleusercontent.com/2uJd0ckzaE5nFVysY1wCMygEfKa4UWBHSXHrPxoHNnIZ1mLyv-Lk07OKrOK0jpKCy71FiayJvZGYEBaefH219ENUQTe-U4qKMLK3_z8Lwv9AWP6H3b7bPKA29r2mTITd3Ni7f-7C)

Lo único añadido para este caso es un **role=”form”** para el <div> que corresponde al Formulario, y añadido un **tabindex=”0”** al Header de Crear Cuenta para que lo lea el Lector de Pantalla. 

Como es una página pequeña y muy sencilla, apenas requiere de adiciones.