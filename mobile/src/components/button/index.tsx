import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { s } from "./styles"; // Certifique-se de que este arquivo exista e esteja correto
import { colors } from "@/styles/theme"; // Certifique-se de que este arquivo exista e esteja correto

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean; // Corrigido para isLoading
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={[s.container, style]} 
            activeOpacity={0.8} 
            disabled={isLoading} 
            {...rest}
        >
            {
                isLoading ? (
                    <ActivityIndicator size="small" color={colors.gray[100]} />
                ) : (
                    children
                )
            }
        </TouchableOpacity>
    );
}

function Title({ children }: TextProps) {
    return <Text style={s.title}>{children}</Text>;
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>;
}

function Icon({ icon: Icon }: IconProps) {
    return <Icon size={24} color={colors.gray[100]} />;
}

// Adicionando as propriedades Title e Icon ao componente Button
Button.Title = Title;
Button.Icon = Icon;

export { Button };
