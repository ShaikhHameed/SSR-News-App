

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/commons/navbar';
import Footer from './components/commons/footer';
import './style.css';

export const metadata = {
  title: "PeakShorts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
