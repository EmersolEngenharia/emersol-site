
# Botao Flutuante de WhatsApp

## O que sera feito
Adicionar um botao verde de WhatsApp fixo no canto inferior direito da tela, visivel em todas as paginas, com animacao de entrada suave e tooltip ao passar o mouse.

## Detalhes

- **Numero**: +55 64 9241-8765 (mesmo ja usado no site)
- **Posicao**: Fixo no canto inferior direito (`fixed bottom-6 right-6`)
- **Visual**: Circulo verde (#25D366) com icone do WhatsApp (MessageCircle do Lucide)
- **Animacao de entrada**: Aparece com delay de 2 segundos usando framer-motion (slide-up + fade-in + scale)
- **Tooltip**: Texto "Fale conosco!" aparece ao passar o mouse, usando o componente Tooltip ja existente no projeto
- **Hover**: Leve aumento de escala (scale 1.1) e sombra mais forte
- **Pulse**: Animacao sutil de pulse para chamar atencao
- **z-index**: Alto (z-50) para ficar acima de todo conteudo

## Implementacao tecnica

1. **Criar** `src/components/WhatsAppButton.tsx` - Componente do botao flutuante
2. **Editar** `src/pages/NewIndex.tsx` - Importar e renderizar o componente

### Estrutura do componente

```text
WhatsAppButton.tsx
  +-- motion.a (framer-motion, fixed position, link para wa.me)
       +-- Tooltip (Radix tooltip com "Fale conosco!")
       +-- MessageCircle icon (Lucide)
       +-- Pulse ring animation (pseudo-element com animate-ping)
```
