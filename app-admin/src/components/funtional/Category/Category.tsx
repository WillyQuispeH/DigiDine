import React from "react";
import Footer from "@/components/layout/Footer";

const Category = () => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Encabezado 1</th>
              <th>Encabezado 2</th>
              <th>Encabezado 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fila 1, Celda 1</td>
              <td>Fila 1, Celda 2</td>
              <td>Fila 1, Celda 3</td>
            </tr>
            <tr>
              <td>Fila 2, Celda 1</td>
              <td>Fila 2, Celda 2</td>
              <td>Fila 2, Celda 3</td>
            </tr>
            <tr>
              <td>Fila 3, Celda 1</td>
              <td>Fila 3, Celda 2</td>
              <td>Fila 3, Celda 3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer>
        <h1>hola</h1>
      </Footer>
    </div>
  );
};

export default Category;
