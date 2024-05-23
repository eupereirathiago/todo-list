import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../services"

export const useBuscarCategorias = () => {
    return useQuery({
        queryKey:["categorias"],
        queryFn: async() => {
            const request = await API.get('/categorias');
            return request.data;
        }
    })
}

export const useBuscarTarefas = () => {
    return useQuery({
        queryKey:["tarefas"],
        queryFn: async() => {
            const request = await API.get('/tarefas');
            return request.data;
        }
    })
}

export const useCriarTarefa = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const request = await API.post('/tarefas', dados);
            return request.data;
        }
    })
}