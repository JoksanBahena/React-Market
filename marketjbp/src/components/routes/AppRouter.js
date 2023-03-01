import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Router, Route, Routes } from "react-router-dom";
import { NavbarAdmin } from "../../shared/components/NavbarAdmin";
import { PublicNavbar } from "../../shared/components/PublicNavbar";
import { AuthContext } from "../auth/authContext";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<>Loin</>} />
        <Route
          path="/*"
          element={
            !user.logged ? (
              <>
                <PublicNavbar />
                <Container style={{ marginTop: "20px" }} className="mt5">
                  <Routes>
                    <Route path="more-info/id" element={<>ProductInfo</>} />
                    <Route path="contact" element={<>Contact</>} />
                    <Route path="home" element={<>HomeScreen</>} />
                    <Route path="/" element={<>HomeScreen</>} />
                    <Route path="+" element={<div>404</div>} />
                  </Routes>
                </Container>{" "}
              </>
            ) : (
              <>
                <NavbarAdmin />
                <Container style={{ marginTop: "20px" }} className="mt5">
                  <Routes>
                    <Route path="products" element={<>Product</>} />
                    <Route path="category" element={<>CategoryScreen</>} />
                    <Route
                      path="subcategory"
                      element={<>SubcategoryScreen</>}
                    />
                    <Route
                      path="update-product/:key"
                      element={<>ProductEdit</>}
                    />
                    <Route path="/home" element={<>Product</>} />
                    <Route index element={<>Product</>} />
                    <Route path="+" element={<div>404</div>} />
                  </Routes>
                </Container>
              </>
            )
          }
        />
        <Route path="+" element={<div>404</div>} />
      </Routes>
    </Router>
  );
};
