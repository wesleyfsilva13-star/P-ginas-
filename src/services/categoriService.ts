import { api } from "./api";
import type { Categoria } from "../types/Categoria";

const categoriaService = {
    async listar() {
        const resposta = await api.get<Categoria[]>('categorias')
        return resposta.data
    }
}
export default categoriaService