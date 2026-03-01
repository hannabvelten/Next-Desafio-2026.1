export default function Mapa() {
    return (
    <div className="w-full h-full lg:h-[400px] flex md:justify-center">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2818818255414!2d-43.35397870305668!3d-21.77542424259441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b69d7097019%3A0x6423cf639dfa6512!2sR.%20Morais%20e%20Castro%20-%20Passos%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036025-160!5e0!3m2!1spt-BR!2sbr!4v1771194401060!5m2!1spt-BR!2sbr"
        width="100%"
        height="50%"
        style={{ border: 0 }}
        loading="lazy"
        className="rounded-4xl lg:py-5 md:w-150 flex justify-center"
        />
    </div>
    );
}
