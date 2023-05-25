import { useEffect, useState } from "react";

const { default: GlossyCubes } = require("@/components/splines/GlossyCubes");

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    !show && setShow(true);
  }, [show]);
  return (
    <div>
      <div className="h-[100vh] w-full relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <section className="flex flex-col gap-10 items-center justify-center container">
            <h1 className="text-gray-800 text-center">
              Musiur Alam Opu
            </h1>
            <p className="text-gray-600  text-center">
              Sint minim dolore non laboris eu ex nostrud excepteur exercitation
              eu elit proident sunt. Occaecat enim tempor est minim eiusmod
              adipisicing esse ex aute et. Id in non non labore dolore duis
              nostrud aliquip do nulla esse sunt. Lorem labore excepteur laboris
              excepteur occaecat magna occaecat consequat nostrud voluptate
              nulla. Excepteur et adipisicing velit aliquip id ullamco voluptate
              id.
            </p>
          </section>
        </div>
        {show ? <GlossyCubes /> : null}
      </div>
      <section className="container">
        Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex mollit
        proident culpa. Id consectetur laboris amet amet reprehenderit fugiat
        sint mollit labore do cillum nulla. Commodo proident id labore amet sint
        proident officia officia commodo et commodo. Ex nisi est in irure
        eiusmod sit nulla consequat dolor consectetur. Fugiat in est pariatur
        amet voluptate. Cillum adipisicing consequat ad magna fugiat. Nostrud eu
        ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate. Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet voluptate.
        Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex mollit
        proident culpa. Id consectetur laboris amet amet reprehenderit fugiat
        sint mollit labore do cillum nulla. Commodo proident id labore amet sint
        proident officia officia commodo et commodo. Ex nisi est in irure
        eiusmod sit nulla consequat dolor consectetur. Fugiat in est pariatur
        amet voluptate. Cillum adipisicing consequat ad magna fugiat. Nostrud eu
        ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet
        voluptate.Cillum adipisicing consequat ad magna fugiat. Nostrud eu ad ex
        mollit proident culpa. Id consectetur laboris amet amet reprehenderit
        fugiat sint mollit labore do cillum nulla. Commodo proident id labore
        amet sint proident officia officia commodo et commodo. Ex nisi est in
        irure eiusmod sit nulla consequat dolor consectetur. Fugiat in est
        pariatur amet voluptate.Cillum adipisicing consequat ad magna fugiat.
        Nostrud eu ad ex mollit proident culpa. Id consectetur laboris amet amet
        reprehenderit fugiat sint mollit labore do cillum nulla. Commodo
        proident id labore amet sint proident officia officia commodo et
        commodo. Ex nisi est in irure eiusmod sit nulla consequat dolor
        consectetur. Fugiat in est pariatur amet voluptate.Cillum adipisicing
        consequat ad magna fugiat. Nostrud eu ad ex mollit proident culpa. Id
        consectetur laboris amet amet reprehenderit fugiat sint mollit labore do
        cillum nulla. Commodo proident id labore amet sint proident officia
        officia commodo et commodo. Ex nisi est in irure eiusmod sit nulla
        consequat dolor consectetur. Fugiat in est pariatur amet voluptate.
      </section>
    </div>
  );
};

export default Home;
